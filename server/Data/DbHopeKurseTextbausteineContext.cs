using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine;

namespace HopeKurseTextbausteine.Data
{
    public partial class DbHopeKurseTextbausteineContext : Microsoft.EntityFrameworkCore.DbContext
    {
        private readonly IHttpContextAccessor httpAccessor;

        public DbHopeKurseTextbausteineContext(IHttpContextAccessor httpAccessor, DbContextOptions<DbHopeKurseTextbausteineContext> options):base(options)
        {
            this.httpAccessor = httpAccessor;
        }

        public DbHopeKurseTextbausteineContext(IHttpContextAccessor httpAccessor)
        {
            this.httpAccessor = httpAccessor;
        }

        partial void OnModelBuilding(ModelBuilder builder);

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Base>()
                  .HasOne(i => i.BaseAnreden)
                  .WithMany(i => i.Bases)
                  .HasForeignKey(i => i.AnredeID)
                  .HasPrincipalKey(i => i.AnredeID);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Benutzer>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Benutzers)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);

            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBenutzerRollen>()
                  .Property(p => p.BenutzerID)
                  .HasDefaultValueSql("0");


            this.OnModelBuilding(builder);
        }


        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Base> Bases
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.BaseAnreden> BaseAnredens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Benutzer> Benutzers
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.InfotexteHtml> InfotexteHtmls
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBenutzerRollen> VwBenutzerRollens
        {
          get;
          set;
        }
    }
}
