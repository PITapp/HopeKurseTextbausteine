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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteineArtens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteineArtens")]
  public partial class IbsiTextbausteineArtensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteineArtensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteineArtens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten> GetIbsiTextbausteineArtens()
    {
      var items = this.context.IbsiTextbausteineArtens.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten>();
      this.OnIbsiTextbausteineArtensRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteineArtensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{TextbausteinArtCode}")]
    public SingleResult<IbsiTextbausteineArten> GetIbsiTextbausteineArten(string key)
    {
        var items = this.context.IbsiTextbausteineArtens.Where(i=>i.TextbausteinArtCode == key);
        this.OnIbsiTextbausteineArtensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteineArtensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten> items);

    partial void OnIbsiTextbausteineArtenDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten item);

    [HttpDelete("{TextbausteinArtCode}")]
    public IActionResult DeleteIbsiTextbausteineArten(string key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteineArtens
                .Where(i => i.TextbausteinArtCode == key)
                .Include(i => i.IbsiTextbausteines)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineArtenDeleted(itemToDelete);
            this.context.IbsiTextbausteineArtens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineArtenUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten item);

    [HttpPut("{TextbausteinArtCode}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteineArten(string key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.TextbausteinArtCode != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineArtenUpdated(newItem);
            this.context.IbsiTextbausteineArtens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineArtens.Where(i => i.TextbausteinArtCode == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{TextbausteinArtCode}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteineArten(string key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteineArtens.Where(i => i.TextbausteinArtCode == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineArtenUpdated(itemToUpdate);
            this.context.IbsiTextbausteineArtens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineArtens.Where(i => i.TextbausteinArtCode == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineArtenCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteineArten item)
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

            this.OnIbsiTextbausteineArtenCreated(item);
            this.context.IbsiTextbausteineArtens.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiTextbausteineArtens/{item.TextbausteinArtCode}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
