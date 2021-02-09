using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("Base")]
  public partial class Base
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int BaseID
    {
      get;
      set;
    }


    public ICollection<Benutzer> Benutzers { get; set; }
    public int? AnredeID
    {
      get;
      set;
    }

    public BaseAnreden BaseAnreden { get; set; }
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
    public string NameKuerzel
    {
      get;
      set;
    }
    public string TitelVorne
    {
      get;
      set;
    }
    public string TitelHinten
    {
      get;
      set;
    }
    public string Strasse
    {
      get;
      set;
    }
    public string PLZ
    {
      get;
      set;
    }
    public string Ort
    {
      get;
      set;
    }
    public string LKZ
    {
      get;
      set;
    }
    public string Telefon1
    {
      get;
      set;
    }
    public string Telefon2
    {
      get;
      set;
    }
    public string EMail1
    {
      get;
      set;
    }
    public string EMail2
    {
      get;
      set;
    }
    public string Website
    {
      get;
      set;
    }
    public string BildURL
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
