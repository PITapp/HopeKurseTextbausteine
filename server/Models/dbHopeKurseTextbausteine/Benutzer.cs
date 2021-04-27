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
    public string AspNetUsers_Id
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
    public string FilterTextbausteinArtCode
    {
      get;
      set;
    }
    public int? FilterKursNr
    {
      get;
      set;
    }
    public string FilterTitelUndText
    {
      get;
      set;
    }
    public int? FilterAutorNr
    {
      get;
      set;
    }
    public int? FilterThemaNummer
    {
      get;
      set;
    }
    public string FilterAnrede
    {
      get;
      set;
    }
    public string FilterDokument
    {
      get;
      set;
    }
    public string FilterInfo
    {
      get;
      set;
    }
  }
}
