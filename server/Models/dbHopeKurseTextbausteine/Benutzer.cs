using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("Benutzer")]
  public partial class Benutzer
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int BenutzerID
    {
      get;
      set;
    }
    public string AspNetUsers_Id
    {
      get;
      set;
    }
    public int BaseID
    {
      get;
      set;
    }

    public Base Base { get; set; }
    public string Benutzername
    {
      get;
      set;
    }
    public string Initialen
    {
      get;
      set;
    }
    public string BenutzerEMail
    {
      get;
      set;
    }
    public string Notiz
    {
      get;
      set;
    }
  }
}
