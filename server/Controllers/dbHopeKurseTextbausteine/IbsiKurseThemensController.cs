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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiKurseThemens")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiKurseThemens")]
  public partial class IbsiKurseThemensController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiKurseThemensController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiKurseThemens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiKurseThemen> GetIbsiKurseThemens()
    {
      var items = this.context.IbsiKurseThemens.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiKurseThemen>();
      this.OnIbsiKurseThemensRead(ref items);

      return items;
    }

    partial void OnIbsiKurseThemensRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiKurseThemen> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{KursThemaNr}")]
    public SingleResult<IbsiKurseThemen> GetIbsiKurseThemen(int key)
    {
        var items = this.context.IbsiKurseThemens.Where(i=>i.KursThemaNr == key);
        this.OnIbsiKurseThemensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiKurseThemensGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiKurseThemen> items);

    partial void OnIbsiKurseThemenDeleted(Models.DbHopeKurseTextbausteine.IbsiKurseThemen item);

    [HttpDelete("{KursThemaNr}")]
    public IActionResult DeleteIbsiKurseThemen(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiKurseThemens
                .Where(i => i.KursThemaNr == key)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiKurseThemenDeleted(itemToDelete);
            this.context.IbsiKurseThemens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiKurseThemenUpdated(Models.DbHopeKurseTextbausteine.IbsiKurseThemen item);

    [HttpPut("{KursThemaNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiKurseThemen(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiKurseThemen newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.KursThemaNr != key))
            {
                return BadRequest();
            }

            this.OnIbsiKurseThemenUpdated(newItem);
            this.context.IbsiKurseThemens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiKurseThemens.Where(i => i.KursThemaNr == key);
            Request.QueryString = Request.QueryString.Add("$expand", "IbsiKurse");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{KursThemaNr}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiKurseThemen(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiKurseThemen> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiKurseThemens.Where(i => i.KursThemaNr == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiKurseThemenUpdated(itemToUpdate);
            this.context.IbsiKurseThemens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiKurseThemens.Where(i => i.KursThemaNr == key);
            Request.QueryString = Request.QueryString.Add("$expand", "IbsiKurse");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiKurseThemenCreated(Models.DbHopeKurseTextbausteine.IbsiKurseThemen item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiKurseThemen item)
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

            this.OnIbsiKurseThemenCreated(item);
            this.context.IbsiKurseThemens.Add(item);
            this.context.SaveChanges();

            var key = item.KursThemaNr;

            var itemToReturn = this.context.IbsiKurseThemens.Where(i => i.KursThemaNr == key);

            Request.QueryString = Request.QueryString.Add("$expand", "IbsiKurse");

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
