using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSITextbausteineTypen")]
  public partial class IbsiTextbausteineTypen
  {
    [Key]
    public string Typ
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
