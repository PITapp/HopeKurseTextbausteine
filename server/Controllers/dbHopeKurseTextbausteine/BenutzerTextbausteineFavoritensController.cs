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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/BenutzerTextbausteineFavoritens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/BenutzerTextbausteineFavoritens")]
  public partial class BenutzerTextbausteineFavoritensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public BenutzerTextbausteineFavoritensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/BenutzerTextbausteineFavoritens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten> GetBenutzerTextbausteineFavoritens()
    {
      var items = this.context.BenutzerTextbausteineFavoritens.AsQueryable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten>();
      this.OnBenutzerTextbausteineFavoritensRead(ref items);

      return items;
    }

    partial void OnBenutzerTextbausteineFavoritensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{TextbausteineFavoritID}")]
    public SingleResult<BenutzerTextbausteineFavoriten> GetBenutzerTextbausteineFavoriten(int key)
    {
        var items = this.context.BenutzerTextbausteineFavoritens.Where(i=>i.TextbausteineFavoritID == key);
        this.OnBenutzerTextbausteineFavoritensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnBenutzerTextbausteineFavoritensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten> items);

    partial void OnBenutzerTextbausteineFavoritenDeleted(Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten item);

    [HttpDelete("{TextbausteineFavoritID}")]
    public IActionResult DeleteBenutzerTextbausteineFavoriten(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.BenutzerTextbausteineFavoritens
                .Where(i => i.TextbausteineFavoritID == key)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnBenutzerTextbausteineFavoritenDeleted(itemToDelete);
            this.context.BenutzerTextbausteineFavoritens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnBenutzerTextbausteineFavoritenUpdated(Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten item);

    [HttpPut("{TextbausteineFavoritID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutBenutzerTextbausteineFavoriten(int key, [FromBody]Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.TextbausteineFavoritID != key))
            {
                return BadRequest();
            }

            this.OnBenutzerTextbausteineFavoritenUpdated(newItem);
            this.context.BenutzerTextbausteineFavoritens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.BenutzerTextbausteineFavoritens.Where(i => i.TextbausteineFavoritID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Benutzer,IbsiTextbausteine");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{TextbausteineFavoritID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchBenutzerTextbausteineFavoriten(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.BenutzerTextbausteineFavoritens.Where(i => i.TextbausteineFavoritID == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnBenutzerTextbausteineFavoritenUpdated(itemToUpdate);
            this.context.BenutzerTextbausteineFavoritens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.BenutzerTextbausteineFavoritens.Where(i => i.TextbausteineFavoritID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Benutzer,IbsiTextbausteine");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnBenutzerTextbausteineFavoritenCreated(Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.BenutzerTextbausteineFavoriten item)
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

            this.OnBenutzerTextbausteineFavoritenCreated(item);
            this.context.BenutzerTextbausteineFavoritens.Add(item);
            this.context.SaveChanges();

            var key = item.TextbausteineFavoritID;

            var itemToReturn = this.context.BenutzerTextbausteineFavoritens.Where(i => i.TextbausteineFavoritID == key);

            Request.QueryString = Request.QueryString.Add("$expand", "Benutzer,IbsiTextbausteine");

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
