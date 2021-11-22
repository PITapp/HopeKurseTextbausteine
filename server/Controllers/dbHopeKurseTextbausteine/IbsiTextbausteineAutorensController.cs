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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteineAutorens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteineAutorens")]
  public partial class IbsiTextbausteineAutorensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteineAutorensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteineAutorens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren> GetIbsiTextbausteineAutorens()
    {
      var items = this.context.IbsiTextbausteineAutorens.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren>();
      this.OnIbsiTextbausteineAutorensRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteineAutorensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{AutorNr}")]
    public SingleResult<IbsiTextbausteineAutoren> GetIbsiTextbausteineAutoren(int key)
    {
        var items = this.context.IbsiTextbausteineAutorens.Where(i=>i.AutorNr == key);
        this.OnIbsiTextbausteineAutorensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteineAutorensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren> items);

    partial void OnIbsiTextbausteineAutorenDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren item);

    [HttpDelete("{AutorNr}")]
    public IActionResult DeleteIbsiTextbausteineAutoren(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteineAutorens
                .Where(i => i.AutorNr == key)
                .Include(i => i.IbsiTextbausteines)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineAutorenDeleted(itemToDelete);
            this.context.IbsiTextbausteineAutorens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineAutorenUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren item);

    [HttpPut("{AutorNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteineAutoren(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.AutorNr != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineAutorenUpdated(newItem);
            this.context.IbsiTextbausteineAutorens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineAutorens.Where(i => i.AutorNr == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{AutorNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteineAutoren(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteineAutorens.Where(i => i.AutorNr == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineAutorenUpdated(itemToUpdate);
            this.context.IbsiTextbausteineAutorens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineAutorens.Where(i => i.AutorNr == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineAutorenCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteineAutoren item)
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

            this.OnIbsiTextbausteineAutorenCreated(item);
            this.context.IbsiTextbausteineAutorens.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiTextbausteineAutorens/{item.AutorNr}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
