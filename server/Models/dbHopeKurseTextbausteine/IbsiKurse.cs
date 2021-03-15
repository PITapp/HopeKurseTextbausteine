using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSIKurse")]
  public partial class IbsiKurse
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int KursNr
    {
      get;
      set;
    }


    public ICollection<IbsiKurseThemen> IbsiKurseThemens { get; set; }

    public ICollection<IbsiTextbausteine> IbsiTextbausteines { get; set; }
    public int KursArtNr
    {
      get;
      set;
    }

    public IbsiKurseArten IbsiKurseArten { get; set; }
    public string Titel
    {
      get;
      set;
    }
    public string Untertitel
    {
      get;
      set;
    }
    public string Kurzzeichen
    {
      get;
      set;
    }
    public string Beschreibung
    {
      get;
      set;
    }
    public int? AnzahlThemen
    {
      get;
      set;
    }
    public bool? Printkurs
    {
      get;
      set;
    }
    public bool? Onlinekurs
    {
      get;
      set;
    }
  }
}
