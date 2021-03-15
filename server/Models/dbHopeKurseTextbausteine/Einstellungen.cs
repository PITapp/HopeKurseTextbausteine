using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("Einstellungen")]
  public partial class Einstellungen
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int EinstellungenID
    {
      get;
      set;
    }
    public string PfadDokumenteTextbausteine
    {
      get;
      set;
    }
  }
}
