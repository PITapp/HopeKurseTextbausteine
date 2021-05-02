using System;
using System.Net;
using System.Data;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNet.OData.Query;



namespace HopeKurseTextbausteine.Controllers.DbHopeKurseTextbausteine
{
  using Models;
  using Data;
  using Models.DbHopeKurseTextbausteine;

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/VwBenutzerTextbausteineVerlaufs")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/VwBenutzerTextbausteineVerlaufs")]
  public partial class VwBenutzerTextbausteineVerlaufsController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public VwBenutzerTextbausteineVerlaufsController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/VwBenutzerTextbausteineVerlaufs
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineVerlauf> GetVwBenutzerTextbausteineVerlaufs()
    {
      var items = this.context.VwBenutzerTextbausteineVerlaufs.AsNoTracking().AsQueryable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineVerlauf>();
      this.OnVwBenutzerTextbausteineVerlaufsRead(ref items);

      return items;
    }

    partial void OnVwBenutzerTextbausteineVerlaufsRead(ref IQueryable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineVerlauf> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{BenutzerID}")]
    public SingleResult<VwBenutzerTextbausteineVerlauf> GetVwBenutzerTextbausteineVerlauf(int key)
    {
        var items = this.context.VwBenutzerTextbausteineVerlaufs.AsNoTracking().Where(i=>i.BenutzerID == key);
        this.OnVwBenutzerTextbausteineVerlaufsGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwBenutzerTextbausteineVerlaufsGet(ref IQueryable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineVerlauf> items);

  }
}
