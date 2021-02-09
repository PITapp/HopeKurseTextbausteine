using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("vwBenutzerRollen")]
  public partial class VwBenutzerRollen
  {
    public int BenutzerID
    {
      get;
      set;
    }
    [Key]
    public int BaseID
    {
      get;
      set;
    }
    public string Name1
    {
      get;
      set;
    }
    public string Name2
    {
      get;
      set;
    }
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
    public string RoleId
    {
      get;
      set;
    }
    public string Benutzerrolle
    {
      get;
      set;
    }
  }
}
