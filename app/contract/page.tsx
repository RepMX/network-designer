"use client"

import React, { useState } from "react"
import { Printer, ArrowLeft } from "lucide-react"

export default function ContractPage() {
  // Form State
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    effectiveDate: "",
    clientName: "",
    providerRep: "",
    providerDate: "",
    clientDate: "",
    customPrice: "",
    selectedTier: "",
  })

  // Print function
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  // Helper: Auto-capitalize Names/Streets/Cities (Title Case)
  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Handle transformations on blur to prevent cursor jumps while typing
  const handleBlur = (field: keyof typeof formData) => {
    if (["streetAddress", "city", "clientName", "providerRep"].includes(field)) {
      setFormData((prev) => ({
        ...prev,
        [field]: toTitleCase(prev[field]),
      }))
    }
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    let cleanValue = value

    // Instant formatting for strict structural fields
    if (field === "state") {
      cleanValue = value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 2)
    }
    if (field === "zipCode") {
      cleanValue = value.toUpperCase().replace(/[^A-Z0-9\s-]/g, "").slice(0, 10)
    }

    setFormData((prev) => ({
      ...prev,
      [field]: cleanValue,
    }))
  }

  // Helper: Format YYYY-MM-DD input date to MM/DD/YYYY for printing
  const formatDateForPrint = (dateStr: string) => {
    if (!dateStr) return "—"
    const [year, month, day] = dateStr.split("-")
    return `${month}/${day}/${year}`
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
              Infrastructure Design Contract
            </p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-lg font-bold tracking-tight text-slate-950">
              jedy <span className="font-normal text-slate-400">| Network &amp; Smart Home Design</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">design.jedy.cc</p>
          </div>
        </div>

        {/* Parties & Date Block (Electronic Inputs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 p-6 bg-slate-50 rounded-lg border border-slate-100 print:bg-transparent print:border-none print:p-0 print:my-6">
          
          {/* Provider Panel */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Service Provider
            </label>
            <p className="text-sm font-semibold text-slate-800">Jedy Network &amp; Smart Home Design</p>
            <p className="text-sm text-slate-500">Los Angeles, CA</p>
          </div>

          {/* Project Address Fields */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Project / Property Address
            </label>
            <div className="space-y-1.5">
              <input
                type="text"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={(e) => handleChange("streetAddress", e.target.value)}
                onBlur={() => handleBlur("streetAddress")}
                className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-sm focus:outline-none focus:border-slate-400 print:bg-transparent print:border-none print:p-0 print:text-base print:font-medium"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  onBlur={() => handleBlur("city")}
                  className="flex-1 bg-white border border-slate-200 rounded px-2.5 py-1 text-sm focus:outline-none focus:border-slate-400 print:bg-transparent print:border-none print:p-0 print:text-base print:font-medium"
                />
                <input
                  type="text"
                  placeholder="CA"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  className="w-12 text-center bg-white border border-slate-200 rounded px-1 py-1 text-sm focus:outline-none focus:border-slate-400 print:bg-transparent print:border-none print:p-0 print:text-base print:font-medium"
                />
                <input
                  type="text"
                  placeholder="Zip"
                  value={formData.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  className="w-20 bg-white border border-slate-200 rounded px-2.5 py-1 text-sm focus:outline-none focus:border-slate-400 print:bg-transparent print:border-none print:p-0 print:text-base print:font-medium"
                />
              </div>
            </div>
          </div>

          {/* Bottom Metas */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60 print:pt-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Effective Date
              </label>
              <input
                type="date"
                value={formData.effectiveDate}
                onChange={(e) => handleChange("effectiveDate", e.target.value)}
                className="bg-white border border-slate-200 rounded px-2.5 py-1 text-sm focus:outline-none focus:border-slate-400 print:hidden"
              />
              <span className="hidden print:inline-block text-base font-medium text-slate-900">
                {formatDateForPrint(formData.effectiveDate)}
              </span>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Client / Property Owner
              </label>
              <input
                type="text"
                placeholder="Client Full Name"
                value={formData.clientName}
                onChange={(e) => handleChange("clientName", e.target.value)}
                onBlur={() => handleBlur("clientName")}
                className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-sm focus:outline-none focus:border-slate-400 print:bg-transparent print:border-none print:p-0 print:text-base print:font-medium"
              />
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
            
            {/* Table Interactivity */}
            <div className="my-3 border border-slate-200 rounded-md overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-semibold print:bg-transparent">
                  <tr>
                    <th className="p-3 w-12 text-center print:hidden">Select</th>
                    <th className="p-3">Selected Service Architecture Tier</th>
                    <th className="p-3 text-right">Flat Service Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr 
                    className={`transition-colors cursor-pointer print:bg-transparent ${formData.selectedTier === "core" ? "bg-blue-50/50" : "hover:bg-slate-50/50"}`}
                    onClick={() => handleChange("selectedTier", "core")}
                  >
                    <td className="p-3 text-center print:hidden">
                      <input 
                        type="radio" 
                        name="tier" 
                        checked={formData.selectedTier === "core"} 
                        onChange={() => {}} 
                        className="scale-105 accent-slate-900"
                      />
                    </td>
                    <td className="p-3 font-medium text-slate-800">
                      <span className="hidden print:inline mr-2">{formData.selectedTier === "core" ? "[X]" : "[ ]"}</span>
                      Secure Core Architecture Deployment
                    </td>
                    <td className="p-3 text-right text-slate-600 font-medium">$699.00</td>
                  </tr>
                  <tr 
                    className={`transition-colors cursor-pointer print:bg-transparent ${formData.selectedTier === "smart" ? "bg-blue-50/50" : "hover:bg-slate-50/50"}`}
                    onClick={() => handleChange("selectedTier", "smart")}
                  >
                    <td className="p-3 text-center print:hidden">
                      <input 
                        type="radio" 
                        name="tier" 
                        checked={formData.selectedTier === "smart"} 
                        onChange={() => {}}
                        className="scale-105 accent-slate-900"
                      />
                    </td>
                    <td className="p-3 font-medium text-slate-800">
                      <span className="hidden print:inline mr-2">{formData.selectedTier === "smart" ? "[X]" : "[ ]"}</span>
                      Smart Home &amp; Business Infrastructure Deployment
                    </td>
                    <td className="p-3 text-right text-slate-600 font-medium">$1,399.00</td>
                  </tr>
                  <tr 
                    className={`transition-colors cursor-pointer print:bg-transparent ${formData.selectedTier === "custom" ? "bg-blue-50/50" : "hover:bg-slate-50/50"}`}
                    onClick={() => handleChange("selectedTier", "custom")}
                  >
                    <td className="p-3 text-center print:hidden">
                      <input 
                        type="radio" 
                        name="tier" 
                        checked={formData.selectedTier === "custom"} 
                        onChange={() => {}}
                        className="scale-105 accent-slate-900"
                      />
                    </td>
                    <td className="p-3 font-medium text-slate-800">
                      <span className="hidden print:inline mr-2">{formData.selectedTier === "custom" ? "[X]" : "[ ]"}</span>
                      Bespoke Custom Premium Enterprise Blueprint Workflow
                    </td>
                    <td className="p-3 text-right text-slate-600 font-medium">
                      <span className="print:hidden">$ </span>
                      <input
                        type="text"
                        placeholder="_________________"
                        value={formData.customPrice}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleChange("customPrice", e.target.value)}
                        className="bg-transparent border-b border-transparent hover:border-slate-300 focus:border-slate-500 text-right w-28 focus:outline-none print:border-none print:w-auto"
                      />
                    </td>
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

        {/* Completely Symmetrical & Flexible Signatures Block */}
        <div className="mt-20 pt-12 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-16 print:mt-16 print:pt-8">
          
          {/* Left Side: Provider Authorization */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Service Provider Authorization
            </div>
            {/* Blank line frame for signature capture */}
            <div className="h-16 border-b border-dashed border-slate-200 print:border-slate-300"></div>
            
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Authorized Representative Name"
                  value={formData.providerRep}
                  onChange={(e) => handleChange("providerRep", e.target.value)}
                  onBlur={() => handleBlur("providerRep")}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-sm font-medium focus:outline-none focus:border-slate-400 print:bg-transparent print:border-none print:p-0 print:text-base"
                />
                <p className="text-xs text-slate-400 mt-1">Provider Representative Signature &amp; Title</p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Date:</span>
                <input
                  type="date"
                  value={formData.providerDate}
                  onChange={(e) => handleChange("providerDate", e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-xs focus:outline-none focus:border-slate-400 print:hidden"
                />
                <span className="hidden print:inline-block text-sm font-medium text-slate-900">
                  {formatDateForPrint(formData.providerDate)}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Client Acceptance */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Client Acceptance &amp; Authorization
            </div>
            {/* Blank line frame for signature capture */}
            <div className="h-16 border-b border-dashed border-slate-200 print:border-slate-300"></div>
            
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Client Authorized Signatory"
                  value={formData.clientName} // Synchronized automatically with upper metadata field
                  onChange={(e) => handleChange("clientName", e.target.value)}
                  onBlur={() => handleBlur("clientName")}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-sm font-medium focus:outline-none focus:border-slate-400 print:bg-transparent print:border-none print:p-0 print:text-base"
                />
                <p className="text-xs text-slate-400 mt-1">Client Authorized Signature &amp; Title</p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Date:</span>
                <input
                  type="date"
                  value={formData.clientDate}
                  onChange={(e) => handleChange("clientDate", e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-xs focus:outline-none focus:border-slate-400 print:hidden"
                />
                <span className="hidden print:inline-block text-sm font-medium text-slate-900">
                  {formatDateForPrint(formData.clientDate)}
                </span>
              </div>
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