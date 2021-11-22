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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteineStatusInhalts")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteineStatusInhalts")]
  public partial class IbsiTextbausteineStatusInhaltsController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteineStatusInhaltsController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteineStatusInhalts
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt> GetIbsiTextbausteineStatusInhalts()
    {
      var items = this.context.IbsiTextbausteineStatusInhalts.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt>();
      this.OnIbsiTextbausteineStatusInhaltsRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteineStatusInhaltsRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{StatusInhalt}")]
    public SingleResult<IbsiTextbausteineStatusInhalt> GetIbsiTextbausteineStatusInhalt(int key)
    {
        var items = this.context.IbsiTextbausteineStatusInhalts.Where(i=>i.StatusInhalt == key);
        this.OnIbsiTextbausteineStatusInhaltsGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteineStatusInhaltsGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt> items);

    partial void OnIbsiTextbausteineStatusInhaltDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt item);

    [HttpDelete("{StatusInhalt}")]
    public IActionResult DeleteIbsiTextbausteineStatusInhalt(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteineStatusInhalts
                .Where(i => i.StatusInhalt == key)
                .Include(i => i.IbsiTextbausteines)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineStatusInhaltDeleted(itemToDelete);
            this.context.IbsiTextbausteineStatusInhalts.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineStatusInhaltUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt item);

    [HttpPut("{StatusInhalt}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteineStatusInhalt(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.StatusInhalt != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineStatusInhaltUpdated(newItem);
            this.context.IbsiTextbausteineStatusInhalts.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineStatusInhalts.Where(i => i.StatusInhalt == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{StatusInhalt}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteineStatusInhalt(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteineStatusInhalts.Where(i => i.StatusInhalt == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineStatusInhaltUpdated(itemToUpdate);
            this.context.IbsiTextbausteineStatusInhalts.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineStatusInhalts.Where(i => i.StatusInhalt == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineStatusInhaltCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusInhalt item)
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

            this.OnIbsiTextbausteineStatusInhaltCreated(item);
            this.context.IbsiTextbausteineStatusInhalts.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiTextbausteineStatusInhalts/{item.StatusInhalt}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
