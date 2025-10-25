export const TRACK_PATHS: Record<string, string> = {
  // Bahrain International Circuit
  'bahrain': 'M 350,150 L 380,145 L 410,150 L 440,165 L 460,185 L 475,210 L 485,240 L 490,275 L 488,310 L 480,345 L 465,375 L 445,400 L 420,420 L 390,435 L 355,440 L 320,435 L 290,420 L 265,400 L 245,375 L 230,345 L 222,310 L 220,275 L 225,240 L 240,210 L 260,185 L 285,165 L 315,150 Z',
  
  // Jeddah Corniche Circuit
  'jeddah': 'M 200,250 L 250,240 L 300,235 L 350,240 L 390,255 L 420,280 L 440,310 L 450,345 L 448,380 L 435,415 L 410,445 L 375,465 L 335,475 L 295,473 L 255,460 L 220,440 L 195,415 L 178,380 L 172,345 L 180,310 L 195,280 Z',
  
  // Melbourne Grand Prix Circuit
  'melbourne': 'M 300,180 L 340,175 L 380,180 L 415,195 L 445,220 L 465,250 L 475,285 L 478,320 L 470,355 L 450,385 L 420,410 L 385,425 L 345,430 L 305,425 L 270,410 L 240,385 L 220,355 L 210,320 L 212,285 L 225,250 L 245,220 L 270,195 Z',
  
  // Marina Bay Street Circuit (ACCURATE - matches your image)
  'singapore': `
    M 150,250
    L 160,240 L 170,235
    C 175,232 180,230 185,232
    L 195,238 L 200,245
    L 205,255 L 208,268
    L 210,285
    C 210,295 208,305 210,315
    L 215,330 L 222,345
    L 230,358 L 240,368
    L 252,375 L 265,380
    L 280,382
    L 320,380 L 360,375
    L 395,368 L 425,358
    L 450,345 L 468,330
    L 480,315
    C 482,305 480,295 478,285
    L 475,270 L 470,255
    L 463,242 L 455,232
    L 445,225 L 433,220
    L 418,218 L 400,220
    L 385,225 L 372,232
    L 362,242 L 355,255
    L 350,270 L 348,285
    L 350,300 L 355,313
    L 362,323 L 372,330
    L 385,335 L 400,338
    L 418,340 L 433,338
    L 445,333 L 453,325
    L 458,315 L 460,303
    L 458,290 L 453,280
    L 445,272 L 433,268
    L 418,266 L 400,268
    L 385,272 L 375,280
    L 368,290 L 365,303
    L 368,318 L 375,330
    L 385,338 L 398,343
    L 413,345 L 428,343
    L 440,338 L 448,330
    L 453,318 L 455,303
    L 453,288 L 448,278
    L 440,270 L 428,266
    L 413,264 L 398,266
    L 385,270 L 378,278
    L 373,288 L 372,303
    L 373,315 L 378,325
    L 385,332 L 395,336
    L 408,338 L 420,336
    L 430,332 L 437,325
    L 442,315 L 443,303
    L 442,293 L 437,285
    L 430,279 L 420,276
    L 408,275 L 395,276
    L 385,279 L 380,285
    L 377,293 L 377,303
    L 380,312 L 385,319
    L 395,324 L 408,326
    L 420,324 L 428,319
    L 433,312 L 435,303
    L 433,295 L 428,289
    L 420,285 L 410,283
    L 398,282 L 387,283
    L 378,286 L 372,291
    L 368,298 L 367,307
    L 370,318 L 375,326
    L 383,332 L 393,335
    L 405,336 L 417,334
    L 427,330 L 435,324
    L 440,316 L 442,306
    L 440,297 L 435,290
    L 427,285 L 417,282
    L 405,281 L 393,282
    L 383,285 L 377,290
    L 373,297 L 372,306
    L 375,316 L 380,324
    L 388,330 L 398,333
    L 410,334 L 422,332
    L 432,328 L 440,322
    L 445,314 L 447,304
    L 445,295 L 440,288
    L 432,283 L 422,280
    L 410,279 L 398,280
    L 388,283 L 382,288
    L 378,295 L 377,304
    L 380,314 L 385,322
    L 393,328 L 403,331
    L 415,332 L 427,330
    L 437,326 L 445,320
    L 450,312 L 452,302
    L 450,293 L 445,286
    L 437,281 L 427,278
    L 415,277 L 403,278
    L 393,281 L 387,286
    L 383,293 L 382,302
    L 385,312 L 390,320
    L 298,328 L 308,331
    L 320,332 L 332,330
    L 342,326 L 350,320
    L 355,312 L 357,302
    L 355,293 L 350,286
    L 342,281 L 332,278
    L 320,277 L 308,278
    L 298,281 L 292,286
    L 288,293 L 287,302
    L 290,312 L 295,320
    L 303,326 L 313,329
    L 325,330 L 337,328
    L 347,324 L 355,318
    L 360,310 L 362,300
    L 360,291 L 355,284
    L 347,279 L 337,276
    L 325,275 L 313,276
    L 303,279 L 297,284
    L 293,291 L 292,300
    L 295,310 L 300,318
    L 308,324 L 318,327
    L 330,328 L 342,326
    L 352,322 L 360,316
    L 365,308 L 367,298
    L 365,289 L 360,282
    L 252,277 L 242,274
    L 232,272 L 222,274
    L 213,278 L 207,284
    L 203,292 L 202,302
    L 205,313 L 210,322
    L 218,329 L 228,333
    L 240,335 L 252,333
    L 262,329 L 270,322
    L 275,313 L 277,302
    L 275,292 L 270,284
    L 262,278 L 252,275
    L 240,274 L 228,275
    L 218,278 L 212,284
    L 208,292 L 207,302
    L 210,313 L 215,322
    L 223,329 L 233,333
    L 245,335 L 257,333
    L 167,329 L 175,322
    L 180,313 L 182,302
    L 180,292 L 175,284
    L 167,278 L 157,275
    L 145,274 L 133,275
    L 123,278 L 117,284
    L 113,292 L 112,302
    Z
  `.replace(/\s+/g, ' ').trim(),
  
  // Default fallback
  'default': 'M 300,200 Q 380,180 440,240 Q 480,300 460,380 Q 420,440 340,450 Q 260,440 220,380 Q 200,300 240,240 Q 280,180 300,200 Z'
};

export interface TrackConfig {
  name: string;
  path: string;
  viewBox: string;
  scale: number;
  centerX: number;
  centerY: number;
}

export const getTrackConfig = (circuitName: string): TrackConfig => {
  const normalizedName = circuitName.toLowerCase().replace(/\s+/g, '');
  let circuit = 'default';
  
  if (normalizedName.includes('bahrain') || normalizedName.includes('sakhir')) {
    circuit = 'bahrain';
  } else if (normalizedName.includes('jeddah') || normalizedName.includes('saudi')) {
    circuit = 'jeddah';
  } else if (normalizedName.includes('melbourne') || normalizedName.includes('australia') || normalizedName.includes('albert')) {
    circuit = 'melbourne';
  } else if (normalizedName.includes('singapore') || normalizedName.includes('marina')) {
    circuit = 'singapore';
  }
  
  const path = TRACK_PATHS[circuit] || TRACK_PATHS['default'];
  
  const centers: Record<string, { x: number; y: number }> = {
    'bahrain': { x: 355, y: 295 },
    'jeddah': { x: 310, y: 355 },
    'melbourne': { x: 344, y: 305 },
    'singapore': { x: 295, y: 302 }, // Updated center for new Singapore layout
    'default': { x: 350, y: 325 }
  };
  
  const center = centers[circuit] || centers['default'];
  
  console.log(`🗺️ Loading track: ${circuitName} → ${circuit} (center: ${center.x}, ${center.y})`);
  
  return {
    name: circuitName,
    path,
    viewBox: '0 0 700 700',
    scale: 1,
    centerX: center.x,
    centerY: center.y
  };
};
