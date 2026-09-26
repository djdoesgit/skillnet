import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Inbox, 
  Send, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Filter,
  ArrowRight
} from 'lucide-react';
import RequestCard from '../components/RequestCard';
import EmptyState from '../components/EmptyState';
import { getRequests, updateRequestStatus, getCurrentSession } from '../utils/storage';

export default function RequestsDashboard({ onShowToast, onRequestsUpdated }) {
  const navigate = useNavigate();
  const currentSession = getCurrentSession();
  const collegeId = currentSession?.collegeId || 'NIT-T';
  const collegeName = currentSession?.collegeName || 'NIT Trichy';

  const [activeTab, setActiveTab] = useState('incoming'); // 'incoming' | 'sent' | 'matched'
  const [requests, setRequests] = useState([]);

  const loadRequests = () => {
    const list = getRequests(collegeId);
    setRequests(list);
    if (onRequestsUpdated) onRequestsUpdated(list);
  };

  useEffect(() => {
    loadRequests();
  }, [collegeId]);

  const incomingRequests = requests.filter(r => r.type === 'incoming' && r.status === 'pending');
  const sentRequests = requests.filter(r => r.type === 'sent');
  const matchedRequests = requests.filter(r => r.type === 'matched' || r.status === 'accepted');

  const handleAccept = (requestId) => {
    const target = requests.find(r => r.id === requestId);
    const updated = updateRequestStatus(requestId, 'accepted', null, collegeId);
    setRequests(updated);
    if (onRequestsUpdated) onRequestsUpdated(updated);
    if (onShowToast) {
      onShowToast(`Connected with ${target?.studentName || 'student'}! Contact details unlocked.`);
    }
  };

  const handleDecline = (requestId) => {
    const updated = updateRequestStatus(requestId, 'declined', null, collegeId);
    setRequests(updated);
    if (onRequestsUpdated) onRequestsUpdated(updated);
    if (onShowToast) {
      onShowToast('Request declined.');
    }
  };

  return (
    <div className="requests-page-root">
      <div className="requests-hero-header">
        <div className="container">
          <div className="requests-header-inner">
            <div>
              <span className="hero-eyebrow-badge">{collegeName.toUpperCase()} COLLABORATION HUB</span>
              <h1 className="requests-title">{collegeName} Requests & Matches</h1>
              <p className="requests-subtext">
                Manage incoming collaboration offers, sent proposals, and campus connections at {collegeName}.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => navigate('/')}
            >
              <span>Explore More Talent</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="requests-tab-bar" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'incoming'}
              className={`requests-tab-btn ${activeTab === 'incoming' ? 'requests-tab-active' : ''}`}
              onClick={() => setActiveTab('incoming')}
            >
              <Inbox size={16} />
              <span>Incoming Requests</span>
              {incomingRequests.length > 0 && (
                <span className="tab-count-badge tab-count-blue">
                  {incomingRequests.length}
                </span>
              )}
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'sent'}
              className={`requests-tab-btn ${activeTab === 'sent' ? 'requests-tab-active' : ''}`}
              onClick={() => setActiveTab('sent')}
            >
              <Send size={15} />
              <span>Sent Requests</span>
              {sentRequests.length > 0 && (
                <span className="tab-count-badge">
                  {sentRequests.length}
                </span>
              )}
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'matched'}
              className={`requests-tab-btn ${activeTab === 'matched' ? 'requests-tab-active' : ''}`}
              onClick={() => setActiveTab('matched')}
            >
              <Sparkles size={16} className={activeTab === 'matched' ? 'text-accent' : ''} />
              <span>Matched & Connected</span>
              {matchedRequests.length > 0 && (
                <span className="tab-count-badge tab-count-green">
                  {matchedRequests.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="container requests-list-container">
        {/* Active Tab Content */}
        {activeTab === 'incoming' && (
          <div className="requests-tab-pane">
            <div className="pane-header-row">
              <h2 className="pane-title">Incoming Student Requests</h2>
              <span className="text-secondary text-sm">
                Students asking to collaborate with your profile
              </span>
            </div>

            {incomingRequests.length > 0 ? (
              <div className="requests-card-stack">
                {incomingRequests.map((req) => (
                  <RequestCard
                    key={req.id}
                    request={req}
                    type="incoming"
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="inbox"
                title="No pending incoming requests"
                message="When other students discover your profile and ask to collaborate, their requests will appear here."
                actionLabel="Update My Profile Skills"
                onAction={() => navigate('/profile')}
              />
            )}
          </div>
        )}

        {activeTab === 'sent' && (
          <div className="requests-tab-pane">
            <div className="pane-header-row">
              <h2 className="pane-title">Sent Collaboration Proposals</h2>
              <span className="text-secondary text-sm">
                Requests you sent to peers across campus
              </span>
            </div>

            {sentRequests.length > 0 ? (
              <div className="requests-card-stack">
                {sentRequests.map((req) => (
                  <RequestCard
                    key={req.id}
                    request={req}
                    type="sent"
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="search"
                title="You haven't sent any requests yet"
                message="Browse campus talent on Discover and send your first collaboration request!"
                actionLabel="Discover Campus Talent"
                onAction={() => navigate('/')}
              />
            )}
          </div>
        )}

        {activeTab === 'matched' && (
          <div className="requests-tab-pane">
            <div className="pane-header-row">
              <h2 className="pane-title">Connected Campus Peers</h2>
              <span className="text-secondary text-sm">
                Accepted partnerships ready for hackathons & projects
              </span>
            </div>

            {matchedRequests.length > 0 ? (
              <div className="requests-card-stack">
                {matchedRequests.map((req) => (
                  <RequestCard
                    key={req.id}
                    request={req}
                    type="matched"
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="sparkles"
                title="No active matches yet"
                message="Accept an incoming request or wait for students to accept your proposals to unlock direct campus contacts."
                actionLabel="Check Incoming Requests"
                onAction={() => setActiveTab('incoming')}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
