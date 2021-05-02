using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("BenutzerTextbausteineVerlauf")]
  public partial class BenutzerTextbausteineVerlauf
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TextbausteineVerlaufID
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
