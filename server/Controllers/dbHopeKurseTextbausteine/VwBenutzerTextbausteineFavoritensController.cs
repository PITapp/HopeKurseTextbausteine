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
using Microsoft.AspNet.OData.Query;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;



namespace HopeKurseTextbausteine.Controllers.DbHopeKurseTextbausteine
{
  using Models;
  using Data;
  using Models.DbHopeKurseTextbausteine;

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/VwBenutzerTextbausteineFavoritens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/VwBenutzerTextbausteineFavoritens")]
  public partial class VwBenutzerTextbausteineFavoritensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public VwBenutzerTextbausteineFavoritensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/VwBenutzerTextbausteineFavoritens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineFavoriten> GetVwBenutzerTextbausteineFavoritens()
    {
      var items = this.context.VwBenutzerTextbausteineFavoritens.AsNoTracking().AsQueryable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineFavoriten>();
      this.OnVwBenutzerTextbausteineFavoritensRead(ref items);

      return items;
    }

    partial void OnVwBenutzerTextbausteineFavoritensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineFavoriten> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{BenutzerID}")]
    public SingleResult<VwBenutzerTextbausteineFavoriten> GetVwBenutzerTextbausteineFavoriten(int key)
    {
        var items = this.context.VwBenutzerTextbausteineFavoritens.AsNoTracking().Where(i=>i.BenutzerID == key);
        this.OnVwBenutzerTextbausteineFavoritensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwBenutzerTextbausteineFavoritensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.VwBenutzerTextbausteineFavoriten> items);

  }
}
