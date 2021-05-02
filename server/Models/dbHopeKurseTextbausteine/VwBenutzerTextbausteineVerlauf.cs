using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("vwBenutzerTextbausteineVerlauf")]
  public partial class VwBenutzerTextbausteineVerlauf
  {
    public int TextbausteineVerlaufID
    {
      get;
      set;
    }
    [Key]
    public int BenutzerID
    {
      get;
      set;
    }
    public DateTime Am
    {
      get;
      set;
    }
    public int TextbausteinNr
    {
      get;
      set;
    }
    public string Benutzername
    {
      get;
      set;
    }
    public string TitelTextbaustein
    {
      get;
      set;
    }
    public string UntertitelTextbaustein
    {
      get;
      set;
    }
    public string TextbausteinArtCode
    {
      get;
      set;
    }
    public string Anrede
    {
      get;
      set;
    }
    public int? ThemaNummer
    {
      get;
      set;
    }
    public string Land
    {
      get;
      set;
    }
    public string InfoText
    {
      get;
      set;
    }
    public string Art
    {
      get;
      set;
    }
    public string TextbausteinHTML
    {
      get;
      set;
    }
    public string DokumentTitel
    {
      get;
      set;
    }
    public string DokumentName
    {
      get;
      set;
    }
    public string DokumentTyp
    {
      get;
      set;
    }
    public int AutorNr
    {
      get;
      set;
    }
    public string AutorName
    {
      get;
      set;
    }

    [Column("AutorKürzel")]
    public string AutorKrzel
    {
      get;
      set;
    }
    public int KursNr
    {
      get;
      set;
    }
    public string KursTitel
    {
      get;
      set;
    }
    public string KursUntertitel
    {
      get;
      set;
    }
    public string KursKurzzeichen
    {
      get;
      set;
    }
  }
}
