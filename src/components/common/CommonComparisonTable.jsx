import neustonLogo from '../../assets/NeustonBiosystemsLOGO.png'
import truckIcon from '../../assets/truck_icon.svg'
import sewerIcon from '../../assets/sewer_icon.svg'
import checkIcon from '../../assets/check_icon.png'
import closeIcon from '../../assets/close_icon.png'

export default function CommonComparisonTable() {
    return (
      <div>
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col"></th>
                      <th scope="col">
                          <img src={neustonLogo} alt="Neuston Logo" />
                          <h5>Neuston Biosystem</h5>
                      </th>
                      <th scope="col">
                          <img src={truckIcon} alt="Truck Icon" />
                          <h5>Off-site Hauling</h5>
                      </th>
                      <th scope="col">
                          <img src={sewerIcon} alt="Sewer Icon" />
                          <h5>Sewer Disposal</h5>
                      </th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <th scope="row">Reduce Disposal Costs</th>
                    <td>
                        <img src={checkIcon} alt="Check Icon" />
                    </td>
                    <td>
                        <img src={closeIcon} alt="Close Icon" />
                    </td>
                    <td>
                        <img src={closeIcon} alt="Close Icon" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Creates Valuable Byproduct</th>
                    <td>
                        <img src={checkIcon} alt="Check Icon" />
                    </td>
                    <td>
                        <img src={closeIcon} alt="Close Icon" />
                    </td>
                    <td>
                        <img src={closeIcon} alt="Close Icon" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Low On-site Footprint</th>
                    <td>
                        <img src={checkIcon} alt="Check Icon" />
                    </td>
                    <td>
                        N/A
                    </td>
                    <td>
                        N/A
                    </td>
                </tr>
                <tr>
                    <th scope="row">Environment Compliance</th>
                    <td>
                        <img src={checkIcon} alt="Check Icon" />
                    </td>
                    <td>
                        <img src={checkIcon} alt="Check Icon" />
                    </td>
                    <td>
                        <img src={checkIcon} alt="Check Icon" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Scales with Production</th>
                    <td>
                        <img src={checkIcon} alt="Check Icon" />
                    </td>
                    <td>
                        <img src={closeIcon} alt="Close Icon" />
                    </td>
                    <td>
                        <img src={closeIcon} alt="Close Icon" />
                    </td>
                </tr>
              </tbody>
          </table>
      </div>
    );
}