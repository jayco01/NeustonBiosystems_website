import neustonLogo from '../../assets/NeustonBiosystemsLOGO.png'
import truckIcon from '../../assets/truck_icon.svg'
import sewerIcon from '../../assets/sewer_icon.svg'
import checkIcon from '../../assets/check_icon.png'
import closeIcon from '../../assets/close_icon.png'
import waterTreatmentPlantIcon from '../../assets/water-treatment-plant_icon.png'

export default function CommonComparisonTable() {
    return (
      <section className="fluid-layout-padding text-neuston-Amber-Darkest bg-neuston-Amber-Lighter">
          <table className="table w-full border-collapse text-center">
              <thead>
                  <tr className="border-solid border-b-1 border-neuston-Amber-Darkest">
                      <th scope="col"></th>
                      <th scope="col" className="sm:px-6 sm:py-3 ">
                          <div className="flex flex-col items-center justify-center">
                              <img src={neustonLogo} alt="Neuston Logo" className="max-w-21 max-h-10" />
                              <h5>Neuston’s Biosystem</h5>
                          </div>
                      </th>
                      <th scope="col" className="sm:px-6 sm:py-3  ">
                          <div className="flex flex-col items-center justify-center">
                              <img src={truckIcon} alt="Truck Icon" className="icon-base-style" />
                              <h5>Off-site Hauling</h5>
                          </div>
                      </th>
                      <th scope="col" className="sm:px-6 sm:py-3  ">
                          <div className="flex flex-col items-center justify-center">
                              <img src={sewerIcon} alt="Sewer Icon" className="icon-base-style" />
                              <h5>Sewer Disposal</h5>
                          </div>
                      </th>
                      <th scope="col" className="sm:px-6 sm:py-3  ">
                          <div className="flex flex-col items-center justify-center">
                              <img src={waterTreatmentPlantIcon} alt="Water Treatment Plant Icon" className="icon-base-style" />
                              <h5>Traditional Treatment Systems</h5>
                          </div>
                      </th>
                  </tr>
              </thead>
              <tbody>
                <tr className="border-solid border-b-1 border-neuston-Amber-Darkest">
                    <th scope="row" className="text-left">Reduce Disposal Costs</th>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={closeIcon} alt="Close Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={closeIcon} alt="Close Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Close Icon" className="icon-base-style" />
                            </div>
                    </td>
                </tr>
                <tr className="border-solid border-b-1 border-neuston-Amber-Darkest">
                    <th scope="row" className="text-left">Creates Valuable Byproduct</th>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={closeIcon} alt="Close Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={closeIcon} alt="Close Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Close Icon" className="icon-base-style" />
                            </div>
                    </td>
                </tr>
                <tr className="border-solid border-b-1 border-neuston-Amber-Darkest">
                    <th scope="row" className="text-left">Low On-site Footprint</th>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        N/A
                    </td>
                    <td>
                        N/A
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <img src={closeIcon} alt="Check Icon" className="icon-base-style" />
                      </div>
                    </td>
                </tr>
                <tr className="border-solid border-b-1 border-neuston-Amber-Darkest">
                    <th scope="row" className="text-left">Environmental Compliance</th>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                            </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                        <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                            </div>
                    </td>
                </tr>
                <tr className="border-solid border-b-1 border-neuston-Amber-Darkest">
                    <th scope="row" className="text-left">Scales with Production</th>
                    <td>
                        <div className="flex items-center justify-center">
                            <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            <img src={checkIcon} alt="Close Icon" className="icon-base-style" />
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            <img src={checkIcon} alt="Check Icon" className="icon-base-style" />
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            <img src={closeIcon} alt="Close Icon" className="icon-base-style" />
                        </div>
                    </td>
                </tr>
              </tbody>
          </table>
      </section>
    );
}