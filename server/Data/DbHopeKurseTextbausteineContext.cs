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
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurse>()
                  .HasOne(i => i.IbsiKurseArten)
                  .WithMany(i => i.IbsiKurses)
                  .HasForeignKey(i => i.KursArtNr)
                  .HasPrincipalKey(i => i.KursArtNr);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurseThemen>()
                  .HasOne(i => i.IbsiKurse)
                  .WithMany(i => i.IbsiKurseThemens)
                  .HasForeignKey(i => i.KursNr)
                  .HasPrincipalKey(i => i.KursNr);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>()
                  .HasOne(i => i.IbsiTextbausteineAnreden)
                  .WithMany(i => i.IbsiTextbausteines)
                  .HasForeignKey(i => i.Anrede)
                  .HasPrincipalKey(i => i.Anrede);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>()
                  .HasOne(i => i.IbsiTextbausteineStatusForm)
                  .WithMany(i => i.IbsiTextbausteines)
                  .HasForeignKey(i => i.Status)
                  .HasPrincipalKey(i => i.Status);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>()
                  .HasOne(i => i.IbsiTextbausteineStatusInhalt)
                  .WithMany(i => i.IbsiTextbausteines)
                  .HasForeignKey(i => i.StatusInhalt)
                  .HasPrincipalKey(i => i.StatusInhalt);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>()
                  .HasOne(i => i.IbsiKurse)
                  .WithMany(i => i.IbsiTextbausteines)
                  .HasForeignKey(i => i.KursNr)
                  .HasPrincipalKey(i => i.KursNr);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>()
                  .HasOne(i => i.IbsiTextbausteineArten)
                  .WithMany(i => i.IbsiTextbausteines)
                  .HasForeignKey(i => i.TextbausteinArtCode)
                  .HasPrincipalKey(i => i.TextbausteinArtCode);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>()
                  .HasOne(i => i.IbsiTextbausteineAutoren)
                  .WithMany(i => i.IbsiTextbausteines)
                  .HasForeignKey(i => i.AutorNr)
                  .HasPrincipalKey(i => i.AutorNr);
            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine>()
                  .HasOne(i => i.IbsiTextbausteineTypen)
                  .WithMany(i => i.IbsiTextbausteines)
                  .HasForeignKey(i => i.Typ)
                  .HasPrincipalKey(i => i.Typ);

            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurse>()
                  .Property(p => p.Printkurs)
                  .HasDefaultValueSql("b'0'");

            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurse>()
                  .Property(p => p.Onlinekurs)
                  .HasDefaultValueSql("b'0'");

            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten>()
                  .Property(p => p.AuswahlKurs)
                  .HasDefaultValueSql("b'0'");

            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten>()
                  .Property(p => p.AuswahlThemaNummer)
                  .HasDefaultValueSql("b'0'");

            builder.Entity<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBaseAlle>()
                  .Property(p => p.BaseID)
                  .HasDefaultValueSql("0");

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

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.Einstellungen> Einstellungens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurse> IbsiKurses
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurseArten> IbsiKurseArtens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiKurseThemen> IbsiKurseThemens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteine> IbsiTextbausteines
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden> IbsiTextbausteineAnredens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten> IbsiTextbausteineArtens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren> IbsiTextbausteineAutorens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm> IbsiTextbausteineStatusForms
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt> IbsiTextbausteineStatusInhalts
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen> IbsiTextbausteineTypens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.InfotexteHtml> InfotexteHtmls
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBaseAlle> VwBaseAlles
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwBenutzerRollen> VwBenutzerRollens
        {
          get;
          set;
        }

        public DbSet<HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine.VwRollen> VwRollens
        {
          get;
          set;
        }
    }
}
