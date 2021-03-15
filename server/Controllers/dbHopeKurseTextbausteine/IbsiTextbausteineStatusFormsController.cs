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

  [ODataRoutePrefix("odata/dbHopeKurseTextbausteine/IbsiTextbausteineStatusForms")]
  [Route("mvc/odata/dbHopeKurseTextbausteine/IbsiTextbausteineStatusForms")]
  public partial class IbsiTextbausteineStatusFormsController : ODataController
  {
    private Data.DbHopeKurseTextbausteineContext context;

    public IbsiTextbausteineStatusFormsController(Data.DbHopeKurseTextbausteineContext context)
    {
      this.context = context;
    }
    // GET /odata/DbHopeKurseTextbausteine/IbsiTextbausteineStatusForms
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm> GetIbsiTextbausteineStatusForms()
    {
      var items = this.context.IbsiTextbausteineStatusForms.AsQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm>();
      this.OnIbsiTextbausteineStatusFormsRead(ref items);

      return items;
    }

    partial void OnIbsiTextbausteineStatusFormsRead(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Status}")]
    public SingleResult<IbsiTextbausteineStatusForm> GetIbsiTextbausteineStatusForm(int key)
    {
        var items = this.context.IbsiTextbausteineStatusForms.Where(i=>i.Status == key);
        this.OnIbsiTextbausteineStatusFormsGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnIbsiTextbausteineStatusFormsGet(ref IQueryable<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm> items);

    partial void OnIbsiTextbausteineStatusFormDeleted(Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm item);

    [HttpDelete("{Status}")]
    public IActionResult DeleteIbsiTextbausteineStatusForm(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.IbsiTextbausteineStatusForms
                .Where(i => i.Status == key)
                .Include(i => i.IbsiTextbausteines)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnIbsiTextbausteineStatusFormDeleted(itemToDelete);
            this.context.IbsiTextbausteineStatusForms.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineStatusFormUpdated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm item);

    [HttpPut("{Status}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutIbsiTextbausteineStatusForm(int key, [FromBody]Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.Status != key))
            {
                return BadRequest();
            }

            this.OnIbsiTextbausteineStatusFormUpdated(newItem);
            this.context.IbsiTextbausteineStatusForms.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineStatusForms.Where(i => i.Status == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{Status}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchIbsiTextbausteineStatusForm(int key, [FromBody]Delta<Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.IbsiTextbausteineStatusForms.Where(i => i.Status == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnIbsiTextbausteineStatusFormUpdated(itemToUpdate);
            this.context.IbsiTextbausteineStatusForms.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.IbsiTextbausteineStatusForms.Where(i => i.Status == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnIbsiTextbausteineStatusFormCreated(Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbHopeKurseTextbausteine.IbsiTextbausteineStatusForm item)
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

            this.OnIbsiTextbausteineStatusFormCreated(item);
            this.context.IbsiTextbausteineStatusForms.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbHopeKurseTextbausteine/IbsiTextbausteineStatusForms/{item.Status}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
