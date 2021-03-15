using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSIKurseThemen")]
  public partial class IbsiKurseThemen
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int KursThemaNr
    {
      get;
      set;
    }
    public int KursNr
    {
      get;
      set;
    }

    public IbsiKurse IbsiKurse { get; set; }
    public int Nummer
    {
      get;
      set;
    }
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
    public string Kurzbeschreibung
    {
      get;
      set;
    }
    public string Begleitmaterial
    {
      get;
      set;
    }
    public string Druckfehler
    {
      get;
      set;
    }
    public string InfoMemo
    {
      get;
      set;
    }
  }
}
