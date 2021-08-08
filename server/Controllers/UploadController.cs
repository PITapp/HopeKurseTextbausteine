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
        public async Task<ActionResult> SingleAsync(IFormFile file)
        {
            try
            {
                // Console.WriteLine("datei: " + file);

                await UploadFile(file);
                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("upload/bild/base/{zielName}")]
        public async Task<ActionResult> Single2Async(IFormFile file, string zielName)
        {
            try
            {
                // Console.WriteLine("datei: " + file);

                await UploadFileBilderBase(file, zielName);
                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("upload/dokumente/{zielName}")]
        public async Task<ActionResult> Single3Async(IFormFile file, string zielName)
        {
            try
            {
                // Console.WriteLine("datei: " + file);

                await UploadFileDokumente(file, zielName);
                return StatusCode(200);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("upload/multiple")]
        public async Task<IActionResult> MultipleAsync(IFormFile[] files)
        {
            try
            {
                foreach (IFormFile file in files)
                {
                    // Console.WriteLine("datei: " + item);

                    await UploadFile(file);
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
                var imagePath = @"\upload";
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

        public async Task UploadFileDokumente(IFormFile file, string zielName)
        {
            if (file != null && file.Length > 0)
            {
                var imagePath = @"\upload\dokumente";
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