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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiKurseArtens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiKurseArtens")]
  public partial class IbsiKurseArtensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiKurseArtensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiKurseArtens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiKurseArten> GetIbsiKurseArtens()
    {
      var items = this.context.IbsiKurseArtens.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiKurseArten>();
      this.OnIbsiKurseArtensRead(ref items);

      return items;
    }

    partial void OnIbsiKurseArtensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiKurseArten> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{KursArtNr}")]
    public SingleResult<IbsiKurseArten> GetIbsiKurseArten(int key)
    {
        var items = this.context.IbsiKurseArtens.Where(i=>i.KursArtNr == key);
        this.OnIbsiKurseArtensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiKurseArtensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiKurseArten> items);

    partial void OnIbsiKurseArtenDeleted(Models.DbHopeKurseTextbausteine.IbsiKurseArten item);

    [HttpDelete("{KursArtNr}")]
    public IActionResult DeleteIbsiKurseArten(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiKurseArtens
                .Where(i => i.KursArtNr == key)
                .Include(i => i.IbsiKurses)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiKurseArtenDeleted(itemToDelete);
            this.context.IbsiKurseArtens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiKurseArtenUpdated(Models.DbHopeKurseTextbausteine.IbsiKurseArten item);

    [HttpPut("{KursArtNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiKurseArten(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiKurseArten newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.KursArtNr != key))
            {
                return BadRequest();
            }

            this.OnIbsiKurseArtenUpdated(newItem);
            this.context.IbsiKurseArtens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiKurseArtens.Where(i => i.KursArtNr == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{KursArtNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiKurseArten(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiKurseArten> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiKurseArtens.Where(i => i.KursArtNr == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiKurseArtenUpdated(itemToUpdate);
            this.context.IbsiKurseArtens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiKurseArtens.Where(i => i.KursArtNr == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiKurseArtenCreated(Models.DbHopeKurseTextbausteine.IbsiKurseArten item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiKurseArten item)
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

            this.OnIbsiKurseArtenCreated(item);
            this.context.IbsiKurseArtens.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiKurseArtens/{item.KursArtNr}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
