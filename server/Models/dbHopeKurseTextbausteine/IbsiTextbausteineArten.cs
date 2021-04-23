using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSITextbausteineArten")]
  public partial class IbsiTextbausteineArten
  {
    [Key]
    public string TextbausteinArtCode
    {
      get;
      set;
    }


    public ICollection<IbsiTextbausteine> IbsiTextbausteines { get; set; }
    public string Bezeichnung
    {
      get;
      set;
    }
    public bool? AuswahlKurs
    {
      get;
      set;
    }
    public bool? AuswahlThemaNummer
    {
      get;
      set;
    }
    public int? Sortierung
    {
      get;
      set;
    }
  }
}
