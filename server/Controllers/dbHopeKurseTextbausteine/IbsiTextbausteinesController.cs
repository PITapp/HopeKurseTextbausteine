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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteines")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteines")]
  public partial class IbsiTextbausteinesController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteinesController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteines
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteine> GetIbsiTextbausteines()
    {
      var items = this.context.IbsiTextbausteines.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteine>();
      this.OnIbsiTextbausteinesRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteinesRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteine> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{TextbausteinNr}")]
    public SingleResult<IbsiTextbausteine> GetIbsiTextbausteine(int key)
    {
        var items = this.context.IbsiTextbausteines.Where(i=>i.TextbausteinNr == key);
        this.OnIbsiTextbausteinesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteinesGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteine> items);

    partial void OnIbsiTextbausteineDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteine item);

    [HttpDelete("{TextbausteinNr}")]
    public IActionResult DeleteIbsiTextbausteine(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteines
                .Where(i => i.TextbausteinNr == key)
                .Include(i => i.BenutzerTextbausteineFavoritens)
                .Include(i => i.BenutzerTextbausteineVerlaufs)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineDeleted(itemToDelete);
            this.context.IbsiTextbausteines.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteine item);

    [HttpPut("{TextbausteinNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteine(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteine newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.TextbausteinNr != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineUpdated(newItem);
            this.context.IbsiTextbausteines.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteines.Where(i => i.TextbausteinNr == key);
            Request.QueryString = Request.QueryString.Add("$expand", "IbsiTextbausteineAnreden,IbsiTextbausteineStatusForm,IbsiTextbausteineStatusInhalt,IbsiKurse,IbsiTextbausteineArten,IbsiTextbausteineAutoren,IbsiTextbausteineTypen");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{TextbausteinNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteine(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteine> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteines.Where(i => i.TextbausteinNr == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineUpdated(itemToUpdate);
            this.context.IbsiTextbausteines.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteines.Where(i => i.TextbausteinNr == key);
            Request.QueryString = Request.QueryString.Add("$expand", "IbsiTextbausteineAnreden,IbsiTextbausteineStatusForm,IbsiTextbausteineStatusInhalt,IbsiKurse,IbsiTextbausteineArten,IbsiTextbausteineAutoren,IbsiTextbausteineTypen");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteine item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteine item)
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

            this.OnIbsiTextbausteineCreated(item);
            this.context.IbsiTextbausteines.Add(item);
            this.context.SaveChanges();

            var key = item.TextbausteinNr;

            var itemToReturn = this.context.IbsiTextbausteines.Where(i => i.TextbausteinNr == key);

            Request.QueryString = Request.QueryString.Add("$expand", "IbsiTextbausteineAnreden,IbsiTextbausteineStatusForm,IbsiTextbausteineStatusInhalt,IbsiKurse,IbsiTextbausteineArten,IbsiTextbausteineAutoren,IbsiTextbausteineTypen");

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
