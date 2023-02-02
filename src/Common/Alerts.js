/** Alerts: displays bootstrap alert(s)
 *
 * Props:
 * - alerts: array of alerts to display
 * - type: string: "success" or "danger"
 *
 * State: none
 *
 * App -> RouteList -> {SignupForm, LoginForm, ProfileForm} -> Alert
 **/
function Alerts({ alerts, type }) {
  return (
    <div className="Alert">
      <div className={`alert alert-${type}`} role="alert">
        {alerts.map((e) => (
          <p className="mb-0 small" key={e}>
            {e}
          </p>
        ))}
      </div>
    </div>
  );
}
export default Alerts;