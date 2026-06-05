"use client"

import React from "react"
import { Printer, ArrowLeft } from "lucide-react"

export default function ContractPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0 font-sans antialiased text-slate-900 selection:bg-blue-100">
      {/* Top Action Bar - Hidden during print */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Site
        </a>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow transition-all active:scale-[0.98]"
        >
          <Printer className="size-4" />
          Print / Save PDF
        </button>
      </div>

      {/* Main Contract Container */}
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-xl rounded-xl p-8 sm:p-16 print:border-none print:shadow-none print:p-0">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight uppercase text-slate-900">
              Service Agreement
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Master Infrastructure &amp; Network Design Contract
            </p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-lg font-bold tracking-tight text-slate-950">
              jedy <span className="font-normal text-slate-400">| Network &amp; Smart Home Design</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">design.jedy.cc</p>
          </div>
        </div>

        {/* Parties & Date Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 p-4 bg-slate-50 rounded-lg border border-slate-100 print:bg-transparent print:border-none print:p-0 print:my-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Service Provider
            </label>
            <p className="text-sm font-medium text-slate-800">Jedy Network &amp; Smart Home Design</p>
            <p className="text-sm text-slate-500">Los Angeles, CA</p>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Client / Property Owner
            </label>
            <div className="h-5 border-b border-slate-300 w-full mb-1 print:border-slate-400"></div>
            <div className="h-5 border-b border-slate-300 w-full print:border-slate-400"></div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4 pt-2 border-t border-slate-200/60 print:pt-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                Effective Date
              </label>
              <div className="h-5 border-b border-slate-300 w-32 print:border-slate-400"></div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                Project/Property Address
              </label>
              <div className="h-5 border-b border-slate-300 w-full print:border-slate-400"></div>
            </div>
          </div>
        </div>

        {/* Contract Terms */}
        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              1. Scope of Services
            </h2>
            <p>
              The Provider agrees to perform technical architecture, engineering consulting, and optimization services as designated below. Services may include physical space environmental assessments, logical network topology blueprints, perimeter gateway security hardening (IDS/IPS configuration), strict logical VLAN network segmentation, and smart home readiness provisioning (including Home Assistant localized framework planning).
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              2. Procurement &amp; Zero Hardware Markup Policy
            </h2>
            <p>
              The Provider operates under a strict transparent procurement model. **All core hardware components, enterprise routing gear, switches, and access points are provided with zero retail markup.** The Client shall purchase all recommended hardware components directly via verified manufacturer retail links provided by the Provider, or shall reimburse the Provider for the exact direct invoice cost of any procurement actions undertaken on the Client's behalf. All original manufacturer hardware warranties remain directly with the Client.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              3. Client Obligations &amp; Access
            </h2>
            <p>
              The Client agrees to provide active, operational Internet Service Provider (ISP) lines to the perimeter gateway position during configuration loops. The Client shall grant the Provider safe physical access to logical utility closets, enclosure frames, and property structures necessary to analyze radio frequency (RF) signal propagation path auditing and place hardware components.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              4. Payment Terms &amp; Flat Fees
            </h2>
            <p>
              Services are billed as a strict flat-rate project package fee, completely immune to hidden hourly extensions. The specified package total for this work order is detailed as:
            </p>
            <div className="my-3 border border-slate-200 rounded-md overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-semibold print:bg-transparent">
                  <tr>
                    <th className="p-3">Selected Service Architecture Tier</th>
                    <th className="p-3 text-right">Flat Service Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium text-slate-800">[ ] Secure Core Architecture Deployment</td>
                    <td className="p-3 text-right text-slate-600">$699.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-800">[ ] Smart Home &amp; Business Infrastructure Deployment</td>
                    <td className="p-3 text-right text-slate-600">$1,399.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-800">[ ] Bespoke Custom Premium Enterprise Blueprint Workflow</td>
                    <td className="p-3 text-right text-slate-600">$_________________</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              *Terms: A baseline commencement deposit of 50% is due upon execution of this agreement. The remaining 50% balance is due instantly upon logical network handover, delivery of custom network blueprints, and administrative credential transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              5. Local-First Data Sovereignty &amp; Credential Transfers
            </h2>
            <p>
              Systems are explicitly engineered to prioritize localized, local-first architectures ensuring privacy and operation completely independent of public cloud states. Upon project closure, all localized master administrator administrative login accounts, encrypted keys, logical gateway topologies, and configuration files will be completely transferred to the Client. The Provider retains zero backdoor access codes, passive remote loops, or data collection routes unless explicit off-site support retainers are established by separate instrument.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              The Provider's liability for any network disruptions, active intrusion attempts, software flaws in public third-party open-source stacks (e.g., Home Assistant Core updates), firmware drops, or component hardware damage shall be legally capped at an amount not to exceed the total cash service fee paid to the Provider under this specific work order. The Provider is an independent infrastructure designer and is not responsible for upstream infrastructure outages originating from the Client's Internet Service Provider.
            </p>
          </section>
        </div>

        {/* Signatures Block */}
        <div className="mt-20 pt-12 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-12 print:mt-16 print:pt-8">
          
          {/* Provider Signature Column */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Service Provider Authorization
            </div>
            <div className="h-16 flex items-end pb-1 text-sm font-medium italic text-slate-800 font-mono tracking-wide">
              Jedy
            </div>
            <div className="border-t border-slate-300 print:border-slate-400"></div>
            <div className="text-sm">
              <p className="font-semibold text-slate-800">Authorized Signature (Jedy)</p>
              <p className="text-xs text-slate-500 mt-0.5">Lead Architect, Jedy Network &amp; Smart Home Design</p>
            </div>
            <div className="pt-2">
              <span className="text-xs text-slate-400 mr-2">Date:</span>
              <span className="text-sm border-b border-slate-300 w-24 inline-block print:border-slate-400">&nbsp;</span>
            </div>
          </div>

          {/* Client Signature Column */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Client Acceptance &amp; Authorization
            </div>
            <div className="h-16"></div>
            <div className="border-t border-slate-300 print:border-slate-400"></div>
            <div className="text-sm">
              <div className="h-5 border-b border-slate-200 w-full mb-1 print:border-slate-300"></div>
              <p className="font-semibold text-slate-800">Client Signature</p>
              <div className="h-5 border-b border-slate-200 w-full mt-2 print:border-slate-300"></div>
              <p className="text-xs text-slate-500 mt-0.5">Printed Legal Name</p>
            </div>
            <div className="pt-2">
              <span className="text-xs text-slate-400 mr-2">Date:</span>
              <span className="text-sm border-b border-slate-300 w-24 inline-block print:border-slate-400">&nbsp;</span>
            </div>
          </div>

        </div>

        {/* Fine Print Footer */}
        <div className="mt-16 pt-6 border-t border-slate-100 text-[10px] text-center text-slate-400 uppercase tracking-widest print:mt-12">
          End of Agreement Document
        </div>

      </div>
    </div>
  )
}