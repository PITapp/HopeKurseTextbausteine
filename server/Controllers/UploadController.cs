using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;


namespace RadzenAngularFileUpload.Controllers
{

    // [Route("upload")]

    [DisableRequestSizeLimit]

    public class UploadController : Controller
    {
        private readonly IWebHostEnvironment _environment;

        public UploadController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost("upload/single")]
        public ActionResult Single(IFormFile file)
        {
            try
            {
                // Console.WriteLine("datei: " + file);

                UploadFile(file);
                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("upload/bild/base/{zielName}")]
        public ActionResult Single2(IFormFile file, string zielName)
        {
            try
            {
                // Console.WriteLine("datei: " + file);

                UploadFileBilderBase(file, zielName);
                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("upload/multiple")]
        public IActionResult Multiple(IFormFile[] files)
        {
            try
            {
                foreach (IFormFile file in files)
                {
                    // Console.WriteLine("datei: " + item);

                    UploadFile(file);
                }
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
                var imagePath = @"\upload\dokumente";
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

        public async Task UploadFileBilderBase(IFormFile file, string zielName)
        {
            if (file != null && file.Length > 0)
            {
                var imagePath = @"\upload\bilder\base";
                var uploadPath = _environment.WebRootPath + imagePath;

                if (!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }

                var fullPath = Path.Combine(uploadPath, zielName);

                using (FileStream fileStream = new FileStream(fullPath, FileMode.Create, FileAccess.Write))

                    await file.CopyToAsync(fileStream);
            }
        }
    }
}