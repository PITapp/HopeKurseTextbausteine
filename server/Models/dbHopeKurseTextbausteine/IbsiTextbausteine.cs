using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HopeKurseTextbausteine.Models.DbHopeKurseTextbausteine
{
  [Table("IBSITextbausteine")]
  public partial class IbsiTextbausteine
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TextbausteinNr
    {
      get;
      set;
    }


    public ICollection<BenutzerTextbausteineFavoriten> BenutzerTextbausteineFavoritens { get; set; }

    public ICollection<BenutzerTextbausteineVerlauf> BenutzerTextbausteineVerlaufs { get; set; }
    public string Anrede
    {
      get;
      set;
    }

    public IbsiTextbausteineAnreden IbsiTextbausteineAnreden { get; set; }
    public int Status
    {
      get;
      set;
    }

    public IbsiTextbausteineStatusForm IbsiTextbausteineStatusForm { get; set; }
    public int StatusInhalt
    {
      get;
      set;
    }

    public IbsiTextbausteineStatusInhalt IbsiTextbausteineStatusInhalt { get; set; }
    public int KursNr
    {
      get;
      set;
    }

    public IbsiKurse IbsiKurse { get; set; }
    public string TextbausteinArtCode
    {
      get;
      set;
    }

    public IbsiTextbausteineArten IbsiTextbausteineArten { get; set; }
    public int AutorNr
    {
      get;
      set;
    }

    public IbsiTextbausteineAutoren IbsiTextbausteineAutoren { get; set; }
    public string Typ
    {
      get;
      set;
    }

    public IbsiTextbausteineTypen IbsiTextbausteineTypen { get; set; }
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
    public string Land
    {
      get;
      set;
    }
    public int? ThemaNummer
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
    public string DokumentErstelltVon
    {
      get;
      set;
    }
    public DateTime? DokumentErstelltAm
    {
      get;
      set;
    }

    [Column("SeiteHöhe")]
    public Int16? SeiteHhe
    {
      get;
      set;
    }
    public Int16? SeiteBreite
    {
      get;
      set;
    }
    public Int16? RandOben
    {
      get;
      set;
    }
    public Int16? RandRechts
    {
      get;
      set;
    }
    public Int16? RandUnten
    {
      get;
      set;
    }
    public Int16? RandLinks
    {
      get;
      set;
    }

    [Column("Änderungsdatum")]
    public DateTime? nderungsdatum
    {
      get;
      set;
    }
    public string InfoText
    {
      get;
      set;
    }
  }
}
