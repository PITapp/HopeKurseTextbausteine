using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace RadzenAngularFileUpload.Controllers
{
  
    [Route("upload")]

    [DisableRequestSizeLimit]

    public class UploadController : Controller
    {
        private readonly IWebHostEnvironment _environment;

        public UploadController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost]
        public ActionResult Post(IFormFile file)
        {
            try
            {
                UploadFile(file);
                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        public async Task UploadFile(IFormFile file)
        {
            if (file != null && file.Length > 0)
            {
                var imagePath = @"\Upload";
                var uploadPath = _environment.WebRootPath + imagePath;

                if (!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }

                var fullPath = Path.Combine(uploadPath, file.FileName);
                
                using (FileStream fileStream = new FileStream(fullPath, FileMode.Create, FileAccess.Write))
                
                await file.CopyToAsync(fileStream);
            }
        }
    }
}