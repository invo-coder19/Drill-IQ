export type EventType = 'Mud Loss' | 'Stuck Pipe' | 'Kick' | 'Torque Spike' | 'Fishing' | 'Cementing Issue' | 'NPT';
export type Well = {
  id: string; distance: number; lat: number; lng: number; formation: string; depth: number;
  formationMatch: number; depthMatch: number; trajectoryMatch: number; eventSimilarity: number; relevance: number;
  reservoirMatch: number; event: EventType; eventDepth: number; severity: 'High' | 'Moderate' | 'Low';
  outcome: string; mitigation: string; document: string; trajectory: string;
};

export const activeWell = { id: 'OIL-A-07', lat: 26.7288, lng: 92.7912, formation: 'Barail Sandstone', depth: 2842, trajectory: 'Deviated · 32°', reservoir: 'Upper Barail', rig: 'Rig DX-04' };
export const wells: Well[] = [
  { id:'OIL-X-12',distance:1.8,lat:26.7412,lng:92.8030,formation:'Barail Sandstone',depth:3012,formationMatch:94,depthMatch:91,trajectoryMatch:92,eventSimilarity:90,relevance:93,reservoirMatch:96,event:'Mud Loss',eventDepth:2868,severity:'High',outcome:'Losses stabilized after 4.2 hrs',mitigation:'LCM treatment + controlled flow rate',document:'DDR-X12-2024-086',trajectory:'Deviated · 34°' },
  { id:'OIL-X-09',distance:2.4,lat:26.7137,lng:92.8095,formation:'Barail Sandstone',depth:2946,formationMatch:92,depthMatch:89,trajectoryMatch:88,eventSimilarity:88,relevance:90,reservoirMatch:93,event:'Mud Loss',eventDepth:2874,severity:'High',outcome:'Losses stabilized after 6.1 hrs',mitigation:'LCM pill + reduced pump rate',document:'WCR-X09-2023-041',trajectory:'Deviated · 30°' },
  { id:'OIL-X-21',distance:3.1,lat:26.7508,lng:92.7703,formation:'Barail Sandstone',depth:3098,formationMatch:90,depthMatch:86,trajectoryMatch:91,eventSimilarity:84,relevance:87,reservoirMatch:89,event:'Mud Loss',eventDepth:2859,severity:'Moderate',outcome:'Partial losses persisted; monitored',mitigation:'LCM treatment + controlled flow rate',document:'MUD-X21-2024-112',trajectory:'Deviated · 33°' },
  { id:'OIL-X-14',distance:1.2,lat:26.7343,lng:92.7832,formation:'Barail Sandstone',depth:2920,formationMatch:88,depthMatch:84,trajectoryMatch:82,eventSimilarity:77,relevance:84,reservoirMatch:87,event:'Torque Spike',eventDepth:2881,severity:'Moderate',outcome:'Torque normalized after reaming',mitigation:'Backream and adjust WOB',document:'DDR-X14-2023-137',trajectory:'Deviated · 28°' },
  { id:'OIL-X-04',distance:4.6,lat:26.6981,lng:92.7613,formation:'Barail Sandstone',depth:3155,formationMatch:86,depthMatch:81,trajectoryMatch:85,eventSimilarity:80,relevance:82,reservoirMatch:86,event:'Stuck Pipe',eventDepth:2894,severity:'High',outcome:'Pipe freed after 8 hrs NPT',mitigation:'Spotting fluid and working string',document:'WCR-X04-2022-209',trajectory:'Deviated · 35°' },
  { id:'OIL-X-18',distance:3.7,lat:26.7573,lng:92.8167,formation:'Barail Sandstone',depth:3050,formationMatch:84,depthMatch:80,trajectoryMatch:79,eventSimilarity:75,relevance:79,reservoirMatch:83,event:'NPT',eventDepth:2912,severity:'Moderate',outcome:'Operations resumed after 3 hrs',mitigation:'Circulation check and bit inspection',document:'DDR-X18-2024-052',trajectory:'Deviated · 29°' },
  { id:'OIL-X-03',distance:0.9,lat:26.7230,lng:92.7965,formation:'Tipam Sandstone',depth:2968,formationMatch:66,depthMatch:81,trajectoryMatch:76,eventSimilarity:69,relevance:72,reservoirMatch:68,event:'Kick',eventDepth:2828,severity:'High',outcome:'Well controlled; no escalation',mitigation:'Shut-in and circulate kill mud',document:'WCR-X03-2022-031',trajectory:'Deviated · 27°' },
  { id:'OIL-X-16',distance:5.2,lat:26.6885,lng:92.8255,formation:'Barail Sandstone',depth:2988,formationMatch:81,depthMatch:78,trajectoryMatch:70,eventSimilarity:65,relevance:71,reservoirMatch:80,event:'Cementing Issue',eventDepth:2940,severity:'Moderate',outcome:'Remedial squeeze successful',mitigation:'Squeeze cement and pressure test',document:'CMT-X16-2023-017',trajectory:'Vertical · 8°' },
  { id:'OIL-X-27',distance:6.8,lat:26.7730,lng:92.7480,formation:'Barail Sandstone',depth:3200,formationMatch:77,depthMatch:73,trajectoryMatch:72,eventSimilarity:62,relevance:68,reservoirMatch:75,event:'Fishing',eventDepth:3010,severity:'High',outcome:'Fish recovered after 14 hrs',mitigation:'Overshot fishing assembly',document:'WCR-X27-2024-066',trajectory:'Deviated · 25°' },
  { id:'OIL-X-06',distance:2.1,lat:26.7100,lng:92.7900,formation:'Tipam Sandstone',depth:2750,formationMatch:60,depthMatch:70,trajectoryMatch:67,eventSimilarity:57,relevance:64,reservoirMatch:62,event:'Torque Spike',eventDepth:2705,severity:'Low',outcome:'Resolved by WOB adjustment',mitigation:'Reduce WOB and monitor torque',document:'DDR-X06-2022-143',trajectory:'Vertical · 12°' },
  { id:'OIL-X-31',distance:8.3,lat:26.7840,lng:92.8430,formation:'Kopili Shale',depth:3390,formationMatch:45,depthMatch:56,trajectoryMatch:58,eventSimilarity:54,relevance:53,reservoirMatch:47,event:'Stuck Pipe',eventDepth:3212,severity:'Moderate',outcome:'Pipe freed with jarring',mitigation:'Jar string and circulate',document:'WCR-X31-2021-098',trajectory:'Deviated · 39°' },
  { id:'OIL-X-02',distance:1.5,lat:26.7320,lng:92.7770,formation:'Tipam Sandstone',depth:2680,formationMatch:41,depthMatch:53,trajectoryMatch:60,eventSimilarity:42,relevance:48,reservoirMatch:45,event:'NPT',eventDepth:2611,severity:'Low',outcome:'Restarted after equipment repair',mitigation:'Replace MWD sensor',document:'DDR-X02-2021-074',trajectory:'Vertical · 10°' },
];
export const depthSteps = [2842,2848,2855,2862,2870];
export const telemetry = Array.from({length: 32}, (_, i) => ({
  depth: 2780 + i * 3,
  torque: +(11.4 + Math.sin(i*.74)*.9 + (i>23 ? (i-23)*.36 : 0)).toFixed(1),
  rop: +(20.8 + Math.sin(i*.52)*2.1 - (i>23 ? (i-23)*.6 : 0)).toFixed(1),
  wob: +(108 + Math.sin(i*.43)*5 + (i>23 ? (i-23)*1.15 : 0)).toFixed(1),
  spp: +(237 + Math.sin(i*.6)*8 + (i>23 ? (i-23)*2.7 : 0)).toFixed(1),
  flow: +(810 + Math.sin(i*.5)*19 - (i>23 ? (i-23)*4 : 0)).toFixed(1),
}));
export const documents = wells.map(w => ({ title: `${w.id} · ${w.event} at ${w.eventDepth.toLocaleString()} m`, type: w.document.startsWith('WCR') ? 'Well Completion Report' : w.document.startsWith('MUD') ? 'Mud Log' : w.document.startsWith('CMT') ? 'Cementing Report' : 'Daily Drilling Report', id: w.document, well: w.id, formation: w.formation, event: w.event, depth: w.eventDepth, severity: w.severity, excerpt: `${w.event} recorded at ${w.eventDepth} m. ${w.mitigation}. ${w.outcome}.`, date: `2024-${String((w.eventDepth % 10)+1).padStart(2,'0')}-${String((w.eventDepth % 23)+1).padStart(2,'0')}` }));
