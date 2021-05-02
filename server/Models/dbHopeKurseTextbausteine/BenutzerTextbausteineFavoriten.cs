using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("BenutzerTextbausteineFavoriten")]
  public partial class BenutzerTextbausteineFavoriten
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TextbausteineFavoritID
    {
      get;
      set;
    }
    public int BenutzerID
    {
      get;
      set;
    }

    public Benutzer Benutzer { get; set; }
    public int TextbausteinNr
    {
      get;
      set;
    }

    public IbsiTextbausteine IbsiTextbausteine { get; set; }
    public DateTime Am
    {
      get;
      set;
    }
  }
}
