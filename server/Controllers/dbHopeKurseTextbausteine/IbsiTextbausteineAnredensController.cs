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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteineAnredens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteineAnredens")]
  public partial class IbsiTextbausteineAnredensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteineAnredensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteineAnredens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden> GetIbsiTextbausteineAnredens()
    {
      var items = this.context.IbsiTextbausteineAnredens.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden>();
      this.OnIbsiTextbausteineAnredensRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteineAnredensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Anrede}")]
    public SingleResult<IbsiTextbausteineAnreden> GetIbsiTextbausteineAnreden(string key)
    {
        var items = this.context.IbsiTextbausteineAnredens.Where(i=>i.Anrede == key);
        this.OnIbsiTextbausteineAnredensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteineAnredensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden> items);

    partial void OnIbsiTextbausteineAnredenDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden item);

    [HttpDelete("{Anrede}")]
    public IActionResult DeleteIbsiTextbausteineAnreden(string key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteineAnredens
                .Where(i => i.Anrede == key)
                .Include(i => i.IbsiTextbausteines)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineAnredenDeleted(itemToDelete);
            this.context.IbsiTextbausteineAnredens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineAnredenUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden item);

    [HttpPut("{Anrede}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteineAnreden(string key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.Anrede != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineAnredenUpdated(newItem);
            this.context.IbsiTextbausteineAnredens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineAnredens.Where(i => i.Anrede == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{Anrede}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteineAnreden(string key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteineAnredens.Where(i => i.Anrede == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineAnredenUpdated(itemToUpdate);
            this.context.IbsiTextbausteineAnredens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineAnredens.Where(i => i.Anrede == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineAnredenCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteineAnreden item)
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

            this.OnIbsiTextbausteineAnredenCreated(item);
            this.context.IbsiTextbausteineAnredens.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiTextbausteineAnredens/{item.Anrede}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
