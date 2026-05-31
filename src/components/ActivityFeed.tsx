type Activity = {
  id: number;
  message: string;
  created_at: string;
};

type ActivityFeedProps = {
  activities: Activity[];
};

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="rounded-3xl border border-[#eadfce] bg-white p-5 shadow-sm">
      <h3 className="font-serif text-2xl">Recent Activity</h3>

      <p className="mt-1 text-sm text-[#7c7164]">
        Latest inventory updates from the team.
      </p>

      <div className="mt-5 space-y-3">
        {activities.length === 0 ? (
          <p className="rounded-2xl bg-[#fbf8f2] p-4 text-sm text-[#7c7164]">
            No recent activity yet.
          </p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="rounded-2xl border border-[#f1e8da] p-4"
            >
              <p className="text-sm text-[#1f1b16]">{activity.message}</p>
              <p className="mt-1 text-xs text-[#8a8175]">
                {activity.created_at}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}