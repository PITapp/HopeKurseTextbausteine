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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/Einstellungens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/Einstellungens")]
  public partial class EinstellungensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public EinstellungensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/Einstellungens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.Einstellungen> GetEinstellungens()
    {
      var items = this.context.Einstellungens.AsQueryable<Models.DbHopeKurseTextbausteine.Einstellungen>();
      this.OnEinstellungensRead(ref items);

      return items;
    }

    partial void OnEinstellungensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.Einstellungen> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{EinstellungenID}")]
    public SingleResult<Einstellungen> GetEinstellungen(int key)
    {
        var items = this.context.Einstellungens.Where(i=>i.EinstellungenID == key);
        this.OnEinstellungensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnEinstellungensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.Einstellungen> items);

    partial void OnEinstellungenDeleted(Models.DbHopeKurseTextbausteine.Einstellungen item);

    [HttpDelete("{EinstellungenID}")]
    public IActionResult DeleteEinstellungen(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.Einstellungens
                .Where(i => i.EinstellungenID == key)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnEinstellungenDeleted(itemToDelete);
            this.context.Einstellungens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnEinstellungenUpdated(Models.DbHopeKurseTextbausteine.Einstellungen item);

    [HttpPut("{EinstellungenID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutEinstellungen(int key, [FromBody]Models.DbHopeKurseTextbausteine.Einstellungen newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.EinstellungenID != key))
            {
                return BadRequest();
            }

            this.OnEinstellungenUpdated(newItem);
            this.context.Einstellungens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Einstellungens.Where(i => i.EinstellungenID == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{EinstellungenID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchEinstellungen(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.Einstellungen> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.Einstellungens.Where(i => i.EinstellungenID == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnEinstellungenUpdated(itemToUpdate);
            this.context.Einstellungens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Einstellungens.Where(i => i.EinstellungenID == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnEinstellungenCreated(Models.DbHopeKurseTextbausteine.Einstellungen item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.Einstellungen item)
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

            this.OnEinstellungenCreated(item);
            this.context.Einstellungens.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/Einstellungens/{item.EinstellungenID}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
