export default function ReportBanner() {


  return (
    <section className="rounded-[28px] bg-[#f7b718] p-6 md:p-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          
          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
              Stay <br />
              Prepared.
            </h2>
          </div>

          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
              Make An <br />
              Impact.
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm font-medium text-black/80">
              Generate and download a full inventory report for the team.
            </p>
          </div>

        </div>

         <a
            href="https://welcome-backend-up4w.onrender.com/reports/inventory"
            download="welcome-home-inventory-report.pdf"
            className="rounded-2xl bg-black px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Download PDF →
          </a>

      </div>
    </section>
  );
}