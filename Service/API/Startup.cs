using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
// using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Serilog;
using DL;
using BL;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        // private readonly ILogger _logger;
        public Startup(IConfiguration config)
        {
            _config = config;
            Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(_config)
                .CreateLogger();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(_config.GetConnectionString("DefaultConnection"));
            });
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy
                    .AllowAnyOrigin()//.WithOrigins("http://localhost:3000"); //
                    .AllowAnyMethod()
                    .AllowAnyHeader();                    
                });
            });

            // services.AddMediatR(typeof(List.Handler).Assembly);
            services.AddScoped<IBuyerRepo, BuyerRepo>();
            services.AddScoped<IBuyerBL, BuyerBL>();
            services.AddScoped<IExhibitorRepo, ExhibitorRepo>();
            services.AddScoped<IExhibitorBL, ExhibitorBL>();
            services.AddScoped<ITransactionRepo, TransactionRepo>();
            services.AddScoped<ITransactionBL, TransactionBL>();
            // services.AddScoped<IMapper, Mapper>();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => 
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
                    c.RoutePrefix = "";
                });
                // var logger = new LoggerConfiguration()
                //     .ReadFrom.Configuration(app)
                //     .Enrich.FromLogContext()
                //     .CreateLogger();
                // app.Logging.ClearProviders();
                // app.Logging.AddSerilog(logger);
            }

            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
