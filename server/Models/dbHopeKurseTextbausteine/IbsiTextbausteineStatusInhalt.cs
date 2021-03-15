using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSITextbausteineStatusInhalt")]
  public partial class IbsiTextbausteineStatusInhalt
  {
    [Key]
    public int StatusInhalt
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
  }
}
