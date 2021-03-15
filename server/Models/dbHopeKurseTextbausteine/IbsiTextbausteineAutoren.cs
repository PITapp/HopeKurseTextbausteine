using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSITextbausteineAutoren")]
  public partial class IbsiTextbausteineAutoren
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int AutorNr
    {
      get;
      set;
    }


    public ICollection<IbsiTextbausteine> IbsiTextbausteines { get; set; }
    public string Name
    {
      get;
      set;
    }

    [Column("Kürzel")]
    public string Krzel
    {
      get;
      set;
    }
  }
}
