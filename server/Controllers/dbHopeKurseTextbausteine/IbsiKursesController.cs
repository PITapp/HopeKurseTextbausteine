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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiKurses")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiKurses")]
  public partial class IbsiKursesController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiKursesController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiKurses
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiKurse> GetIbsiKurses()
    {
      var items = this.context.IbsiKurses.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiKurse>();
      this.OnIbsiKursesRead(ref items);

      return items;
    }

    partial void OnIbsiKursesRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiKurse> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{KursNr}")]
    public SingleResult<IbsiKurse> GetIbsiKurse(int key)
    {
        var items = this.context.IbsiKurses.Where(i=>i.KursNr == key);
        this.OnIbsiKursesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiKursesGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiKurse> items);

    partial void OnIbsiKurseDeleted(Models.DbHopeKurseTextbausteine.IbsiKurse item);

    [HttpDelete("{KursNr}")]
    public IActionResult DeleteIbsiKurse(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiKurses
                .Where(i => i.KursNr == key)
                .Include(i => i.IbsiKurseThemens)
                .Include(i => i.IbsiTextbausteines)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiKurseDeleted(itemToDelete);
            this.context.IbsiKurses.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiKurseUpdated(Models.DbHopeKurseTextbausteine.IbsiKurse item);

    [HttpPut("{KursNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiKurse(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiKurse newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.KursNr != key))
            {
                return BadRequest();
            }

            this.OnIbsiKurseUpdated(newItem);
            this.context.IbsiKurses.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiKurses.Where(i => i.KursNr == key);
            Request.QueryString = Request.QueryString.Add("$expand", "IbsiKurseArten");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{KursNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiKurse(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiKurse> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiKurses.Where(i => i.KursNr == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiKurseUpdated(itemToUpdate);
            this.context.IbsiKurses.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiKurses.Where(i => i.KursNr == key);
            Request.QueryString = Request.QueryString.Add("$expand", "IbsiKurseArten");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiKurseCreated(Models.DbHopeKurseTextbausteine.IbsiKurse item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiKurse item)
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

            this.OnIbsiKurseCreated(item);
            this.context.IbsiKurses.Add(item);
            this.context.SaveChanges();

            var key = item.KursNr;

            var itemToReturn = this.context.IbsiKurses.Where(i => i.KursNr == key);

            Request.QueryString = Request.QueryString.Add("$expand", "IbsiKurseArten");

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
