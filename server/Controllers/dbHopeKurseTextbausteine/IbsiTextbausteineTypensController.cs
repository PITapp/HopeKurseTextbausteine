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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteineTypens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteineTypens")]
  public partial class IbsiTextbausteineTypensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteineTypensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteineTypens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen> GetIbsiTextbausteineTypens()
    {
      var items = this.context.IbsiTextbausteineTypens.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen>();
      this.OnIbsiTextbausteineTypensRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteineTypensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Typ}")]
    public SingleResult<IbsiTextbausteineTypen> GetIbsiTextbausteineTypen(string key)
    {
        var items = this.context.IbsiTextbausteineTypens.Where(i=>i.Typ == key);
        this.OnIbsiTextbausteineTypensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteineTypensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen> items);

    partial void OnIbsiTextbausteineTypenDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen item);

    [HttpDelete("{Typ}")]
    public IActionResult DeleteIbsiTextbausteineTypen(string key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteineTypens
                .Where(i => i.Typ == key)
                .Include(i => i.IbsiTextbausteines)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineTypenDeleted(itemToDelete);
            this.context.IbsiTextbausteineTypens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineTypenUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen item);

    [HttpPut("{Typ}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteineTypen(string key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.Typ != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineTypenUpdated(newItem);
            this.context.IbsiTextbausteineTypens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineTypens.Where(i => i.Typ == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{Typ}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteineTypen(string key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteineTypens.Where(i => i.Typ == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineTypenUpdated(itemToUpdate);
            this.context.IbsiTextbausteineTypens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineTypens.Where(i => i.Typ == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineTypenCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteineTypen item)
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

            this.OnIbsiTextbausteineTypenCreated(item);
            this.context.IbsiTextbausteineTypens.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiTextbausteineTypens/{item.Typ}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
