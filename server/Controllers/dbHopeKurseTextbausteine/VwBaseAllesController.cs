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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/VwBaseAlles")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/VwBaseAlles")]
  public partial class VwBaseAllesController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public VwBaseAllesController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/VwBaseAlles
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.VwBaseAlle> GetVwBaseAlles()
    {
      var items = this.context.VwBaseAlles.AsNoTracking().AsQueryable<Models.DbHopeKurseTextbausteine.VwBaseAlle>();
      this.OnVwBaseAllesRead(ref items);

      return items;
    }

    partial void OnVwBaseAllesRead(ref IQueryable<Models.DbHopeKurseTextbausteine.VwBaseAlle> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{BaseID}")]
    public SingleResult<VwBaseAlle> GetVwBaseAlle(int key)
    {
        var items = this.context.VwBaseAlles.AsNoTracking().Where(i=>i.BaseID == key);
        this.OnVwBaseAllesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwBaseAllesGet(ref IQueryable<Models.DbHopeKurseTextbausteine.VwBaseAlle> items);

  }
}
