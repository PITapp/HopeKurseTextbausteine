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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/Bases")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/Bases")]
  public partial class BasesController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public BasesController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/Bases
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.Base> GetBases()
    {
      var items = this.context.Bases.AsQueryable<Models.DbHopeKurseTextbausteine.Base>();
      this.OnBasesRead(ref items);

      return items;
    }

    partial void OnBasesRead(ref IQueryable<Models.DbHopeKurseTextbausteine.Base> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{BaseID}")]
    public SingleResult<Base> GetBase(int key)
    {
        var items = this.context.Bases.Where(i=>i.BaseID == key);
        this.OnBasesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnBasesGet(ref IQueryable<Models.DbHopeKurseTextbausteine.Base> items);

    partial void OnBaseDeleted(Models.DbHopeKurseTextbausteine.Base item);

    [HttpDelete("{BaseID}")]
    public IActionResult DeleteBase(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.Bases
                .Where(i => i.BaseID == key)
                .Include(i => i.Benutzers)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnBaseDeleted(itemToDelete);
            this.context.Bases.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnBaseUpdated(Models.DbHopeKurseTextbausteine.Base item);

    [HttpPut("{BaseID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutBase(int key, [FromBody]Models.DbHopeKurseTextbausteine.Base newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.BaseID != key))
            {
                return BadRequest();
            }

            this.OnBaseUpdated(newItem);
            this.context.Bases.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Bases.Where(i => i.BaseID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "BaseAnreden");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{BaseID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchBase(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.Base> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.Bases.Where(i => i.BaseID == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnBaseUpdated(itemToUpdate);
            this.context.Bases.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Bases.Where(i => i.BaseID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "BaseAnreden");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnBaseCreated(Models.DbHopeKurseTextbausteine.Base item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.Base item)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (item == null)
            {
                return BadRequest();
            }

            this.OnBaseCreated(item);
            this.context.Bases.Add(item);
            this.context.SaveChanges();

            var key = item.BaseID;

            var itemToReturn = this.context.Bases.Where(i => i.BaseID == key);

            Request.QueryString = Request.QueryString.Add("$expand", "BaseAnreden");

            return new ObjectResult(SingleResult.Create(itemToReturn))
            {
                StatusCode = 201
            };
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
