using System;
using System.IO;
using System.Text;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Builder;

using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Hosting;

using HopeKurseTextbausteine.Data;
using HopeKurseTextbausteine.Models;
using HopeKurseTextbausteine.Authentication;

namespace HopeKurseTextbausteine
{
  public partial class Startup
  {
    public Startup(IConfiguration configuration, IWebHostEnvironment env)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    partial void OnConfigureServices(IServiceCollection services);

    partial void OnConfiguringServices(IServiceCollection services);

    public void ConfigureServices(IServiceCollection services)
    {
      OnConfiguringServices(services);

      services.AddOptions();
      services.AddLogging(logging =>
      {
          logging.AddConsole();
          logging.AddDebug();
      });

      services.AddCors(options =>
      {
          options.AddPolicy(
              "AllowAny",
              x =>
              {
                  x.AllowAnyHeader()
                  .AllowAnyMethod()
                  .SetIsOriginAllowed(isOriginAllowed: _ => true)
                  .AllowCredentials();
              });
      });
      services.AddMvc(options =>
      {
          options.EnableEndpointRouting = false;

          options.OutputFormatters.Add(new HopeKurseTextbausteine.Data.XlsDataContractSerializerOutputFormatter());
          options.FormatterMappings.SetMediaTypeMappingForFormat("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

          options.OutputFormatters.Add(new HopeKurseTextbausteine.Data.CsvDataContractSerializerOutputFormatter());
          options.FormatterMappings.SetMediaTypeMappingForFormat("csv", "text/csv");
      }).AddNewtonsoftJson();

      services.AddAuthorization();
      
          services.AddOData();
          services.AddODataQueryFilter();

      services.AddHttpContextAccessor();
      var tokenValidationParameters = new TokenValidationParameters
      {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = TokenProviderOptions.Key,
          ValidateIssuer = true,
          ValidIssuer = TokenProviderOptions.Issuer,
          ValidateAudience = true,
          ValidAudience = TokenProviderOptions.Audience,
          ValidateLifetime = true,
          ClockSkew = TimeSpan.Zero
      };

      services.AddAuthentication(options =>
      {
          options.DefaultScheme = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(options =>
      {
          options.Audience = TokenProviderOptions.Audience;
          options.ClaimsIssuer = TokenProviderOptions.Issuer;
          options.TokenValidationParameters = tokenValidationParameters;
          options.SaveToken = true;
      });
      services.AddDbContext<ApplicationIdentityDbContext>(options =>
      {
         options.UseMySql(Configuration.GetConnectionString("dbHopeKurseTextbausteineConnection"));
      });

      services.AddIdentity<ApplicationUser, IdentityRole>()
            .AddEntityFrameworkStores<ApplicationIdentityDbContext>();

      services.AddScoped<IUserClaimsPrincipalFactory<ApplicationUser>, ApplicationPrincipalFactory>();


      services.AddDbContext<HopeKurseTextbausteine.Data.DbHopeKurseTextbausteineContext>(options =>
      {
        options.UseMySql(Configuration.GetConnectionString("dbHopeKurseTextbausteineConnection"));
      });

      OnConfigureServices(services);
    }

    partial void OnConfigure(IApplicationBuilder app);


    partial void OnConfigure(IApplicationBuilder app, IWebHostEnvironment env);
    partial void OnConfiguring(IApplicationBuilder app, IWebHostEnvironment env);
    partial void OnConfigureOData(ODataConventionModelBuilder builder);

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {

      OnConfiguring(app, env);

      IServiceProvider provider = app.ApplicationServices.GetRequiredService<IServiceProvider>();
      app.UseCors("AllowAny");
      app.Use(async (context, next) => {
          if (context.Request.Path.Value == "/__ssrsreport" || context.Request.Path.Value == "/ssrsproxy") {
            await next();
            return;
          }
          await next();
          if ((context.Response.StatusCode == 404 || context.Response.StatusCode == 401) && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.Contains("/odata")) {
              context.Request.Path = "/index.html";
              await next();
          }
      });

      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseDeveloperExceptionPage();

      app.UseMvc(builder =>
      {
        if (env.EnvironmentName == "Development")
        {
            builder.MapRoute(name: "default",
              template: "{controller}/{action}/{id?}",
              defaults: new { controller = "Home", action = "Index" }
            );
        }

          builder.Count().Filter().OrderBy().Expand().Select().MaxTop(null).SetTimeZoneInfo(TimeZoneInfo.Utc);
        

          var oDataBuilder = new ODataConventionModelBuilder(provider);

          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Base>("Bases");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.BaseAnreden>("BaseAnredens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Benutzer>("Benutzers");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten>("BenutzerTextbausteineFavoritens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf>("BenutzerTextbausteineVerlaufs");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Einstellungen>("Einstellungens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurse>("IbsiKurses");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurseArten>("IbsiKurseArtens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurseThemen>("IbsiKurseThemens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>("IbsiTextbausteines");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden>("IbsiTextbausteineAnredens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten>("IbsiTextbausteineArtens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren>("IbsiTextbausteineAutorens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder>("IbsiTextbausteineFelders");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm>("IbsiTextbausteineStatusForms");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt>("IbsiTextbausteineStatusInhalts");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen>("IbsiTextbausteineTypens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.InfotexteHtml>("InfotexteHtmls");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBaseAlle>("VwBaseAlles");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBenutzerRollen>("VwBenutzerRollens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineFavoriten>("VwBenutzerTextbausteineFavoritens");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineVerlauf>("VwBenutzerTextbausteineVerlaufs");
          oDataBuilder.EntitySet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwRollen>("VwRollens");

          this.OnConfigureOData(oDataBuilder);

          oDataBuilder.EntitySet<ApplicationUser>("ApplicationUsers");
          var usersType = oDataBuilder.StructuralTypes.First(x => x.ClrType == typeof(ApplicationUser));
          usersType.AddCollectionProperty(typeof(ApplicationUser).GetProperty("RoleNames"));
          oDataBuilder.EntitySet<IdentityRole>("ApplicationRoles");

          var model = oDataBuilder.GetEdmModel();

          builder.MapODataServiceRoute("odata/dbHopeKurseTextbausteine", "odata/dbHopeKurseTextbausteine", model);

          builder.MapODataServiceRoute("auth", "auth", model);
      });


      if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("RADZEN")) && env.IsDevelopment())
      {
        app.UseSpa(spa =>
        {
          spa.Options.SourcePath = "../client";
          spa.UseAngularCliServer(npmScript: "start -- --port 8000 --open");
        });
      }

      OnConfigure(app);
      OnConfigure(app, env);
    }
  }
}
