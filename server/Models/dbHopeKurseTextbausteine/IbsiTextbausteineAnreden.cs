using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSITextbausteineAnreden")]
  public partial class IbsiTextbausteineAnreden
  {
    [Key]
    public string Anrede
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
    public int? Sortierung
    {
      get;
      set;
    }
  }
}
