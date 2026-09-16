const DONATION_DATA = 'data/donation.json';

async function loadDonationProgress() {
  const raisedEl = document.getElementById('raised');
  if (!raisedEl) return;
  try {
    const response = await fetch(`${DONATION_DATA}?v=${Date.now()}`);
    if (!response.ok) throw new Error('Unable to load donation data');
    const data = await response.json();
    const raised = Number(data.raised) || 0;
    const goal = Number(data.goal) || 1;
    const percent = Math.min(100, Math.max(0, (raised / goal) * 100));
    document.getElementById('raised').textContent = `₹${raised.toLocaleString('en-IN')}`;
    document.getElementById('goal').textContent = goal.toLocaleString('en-IN');
    document.getElementById('progressPercent').textContent = `${percent.toFixed(1).replace('.0','')}%`;
    document.getElementById('progressFill').style.width = `${percent}%`;
    document.getElementById('goalLabel').textContent = data.label || 'Current development goal';
  } catch (error) {
    console.warn(error);
  }
}
loadDonationProgress();
