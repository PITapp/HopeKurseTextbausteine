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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/BenutzerTextbausteineVerlaufs")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/BenutzerTextbausteineVerlaufs")]
  public partial class BenutzerTextbausteineVerlaufsController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public BenutzerTextbausteineVerlaufsController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/BenutzerTextbausteineVerlaufs
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf> GetBenutzerTextbausteineVerlaufs()
    {
      var items = this.context.BenutzerTextbausteineVerlaufs.AsQueryable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf>();
      this.OnBenutzerTextbausteineVerlaufsRead(ref items);

      return items;
    }

    partial void OnBenutzerTextbausteineVerlaufsRead(ref IQueryable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{TextbausteineVerlaufID}")]
    public SingleResult<BenutzerTextbausteineVerlauf> GetBenutzerTextbausteineVerlauf(int key)
    {
        var items = this.context.BenutzerTextbausteineVerlaufs.Where(i=>i.TextbausteineVerlaufID == key);
        this.OnBenutzerTextbausteineVerlaufsGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnBenutzerTextbausteineVerlaufsGet(ref IQueryable<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf> items);

    partial void OnBenutzerTextbausteineVerlaufDeleted(Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf item);

    [HttpDelete("{TextbausteineVerlaufID}")]
    public IActionResult DeleteBenutzerTextbausteineVerlauf(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.BenutzerTextbausteineVerlaufs
                .Where(i => i.TextbausteineVerlaufID == key)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnBenutzerTextbausteineVerlaufDeleted(itemToDelete);
            this.context.BenutzerTextbausteineVerlaufs.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnBenutzerTextbausteineVerlaufUpdated(Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf item);

    [HttpPut("{TextbausteineVerlaufID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutBenutzerTextbausteineVerlauf(int key, [FromBody]Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.TextbausteineVerlaufID != key))
            {
                return BadRequest();
            }

            this.OnBenutzerTextbausteineVerlaufUpdated(newItem);
            this.context.BenutzerTextbausteineVerlaufs.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.BenutzerTextbausteineVerlaufs.Where(i => i.TextbausteineVerlaufID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Benutzer,IbsiTextbausteine");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{TextbausteineVerlaufID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchBenutzerTextbausteineVerlauf(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.BenutzerTextbausteineVerlaufs.Where(i => i.TextbausteineVerlaufID == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnBenutzerTextbausteineVerlaufUpdated(itemToUpdate);
            this.context.BenutzerTextbausteineVerlaufs.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.BenutzerTextbausteineVerlaufs.Where(i => i.TextbausteineVerlaufID == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Benutzer,IbsiTextbausteine");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnBenutzerTextbausteineVerlaufCreated(Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.BenutzerTextbausteineVerlauf item)
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

            this.OnBenutzerTextbausteineVerlaufCreated(item);
            this.context.BenutzerTextbausteineVerlaufs.Add(item);
            this.context.SaveChanges();

            var key = item.TextbausteineVerlaufID;

            var itemToReturn = this.context.BenutzerTextbausteineVerlaufs.Where(i => i.TextbausteineVerlaufID == key);

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
