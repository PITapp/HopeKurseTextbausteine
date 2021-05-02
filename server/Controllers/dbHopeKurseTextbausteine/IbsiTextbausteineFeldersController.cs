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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteineFelders")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteineFelders")]
  public partial class IbsiTextbausteineFeldersController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteineFeldersController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteineFelders
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder> GetIbsiTextbausteineFelders()
    {
      var items = this.context.IbsiTextbausteineFelders.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder>();
      this.OnIbsiTextbausteineFeldersRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteineFeldersRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{FeldID}")]
    public SingleResult<IbsiTextbausteineFelder> GetIbsiTextbausteineFelder(int key)
    {
        var items = this.context.IbsiTextbausteineFelders.Where(i=>i.FeldID == key);
        this.OnIbsiTextbausteineFeldersGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteineFeldersGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder> items);

    partial void OnIbsiTextbausteineFelderDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder item);

    [HttpDelete("{FeldID}")]
    public IActionResult DeleteIbsiTextbausteineFelder(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteineFelders
                .Where(i => i.FeldID == key)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineFelderDeleted(itemToDelete);
            this.context.IbsiTextbausteineFelders.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineFelderUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder item);

    [HttpPut("{FeldID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteineFelder(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.FeldID != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineFelderUpdated(newItem);
            this.context.IbsiTextbausteineFelders.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineFelders.Where(i => i.FeldID == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{FeldID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteineFelder(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteineFelders.Where(i => i.FeldID == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineFelderUpdated(itemToUpdate);
            this.context.IbsiTextbausteineFelders.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineFelders.Where(i => i.FeldID == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineFelderCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteineFelder item)
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

            this.OnIbsiTextbausteineFelderCreated(item);
            this.context.IbsiTextbausteineFelders.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiTextbausteineFelders/{item.FeldID}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
