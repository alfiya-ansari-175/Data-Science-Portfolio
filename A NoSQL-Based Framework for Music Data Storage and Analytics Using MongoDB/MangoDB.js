use SpotifyAnalytics

db.tracks.countDocuments()
85000

// No of tracks released after the year 2020
db.tracks.countDocuments({release_year : { $gt: 2020}})
38412

//Basic Analysis
db.tracks.aggregate([
  {
    $group: {
      _id: null,
      maxYear: { $max: "$release_year" },
      minYear: { $min: "$release_year" }
    }
  }
])

{
  _id: null,
  maxYear: 2025,
  minYear: 2015
}

// Count of explicit tracks only
db.tracks.countDocuments({explicit : 1})

17113

// No of tracks by popularity level
db.tracks.aggregate([{
	$group : {
    _id : "$popularity_level",
    Count : {$sum : 1}
  }
}])
{
  _id: 'High',
  Count: 7119
}
{
  _id: 'Medium',
  Count: 53223
}
{
  _id: 'Low',
  Count: 24658
}

//Max and min time of a song and 
db.tracks.aggregate([
  {
    $group : {
      _id : null,
      maxTime : {$max : "$duration_minutes"},
      minTime : {$min : "$duration_minutes"}
    }
  }
])

{
  _id: null,
  maxTime: 7,
  minTime: 2
}


// Top 5 tracks with popularity above 90
db.tracks.find({popularity : {$gte : 90}},
               {_id:0, track_name:1, popularity:1}).sort({popularity:-1}).limit(5)

{
  track_name: 'Good anything manager think',
  popularity: 100
}
{
  track_name: 'Space',
  popularity: 100
}
{
  track_name: 'Of',
  popularity: 100
}
{
  track_name: 'Outside former official',
  popularity: 100
}
{
  track_name: 'Finally easy exist',
  popularity: 100
}

// Count of Danceable Songs
db.tracks.countDocuments({ danceability: { $gt: 0.7 } })
25794

// Count of Instrumental Songs
db.tracks.countDocuments({ instrumentalness: { $gt: 0.7 } })
10656

//Top 5 artist & album by popularity
db.tracks.aggregate([
  {$sort : {popularity : -1} },
  {$limit : 5},
  
  {$project :{ _id : 0, artist_name : 1, album_name:1, popularity:1}}
])

{
  artist_name: 'Bonnie Roberson',
  album_name: 'Already',
  popularity: 100
}
{
  artist_name: 'Joseph Duncan',
  album_name: 'Enter',
  popularity: 100
}
{
  artist_name: 'David Rivas',
  album_name: 'Two lawyer',
  popularity: 100
}
{
  artist_name: 'Lisa Barnes',
  album_name: 'Book',
  popularity: 100
}
{
  artist_name: 'Julie Herrera',
  album_name: 'Lawyer',
  popularity: 100
}


db.tracks.countDocuments({popularity : {$eq : 100}})
397


//Top 5 artists who appear most often with popularity = 100
db.tracks.aggregate([
  {$match : {popularity :100}},
  {$group : {
    _id : "$artist_name",
    count : {$sum : 1}
  }},
  {$sort : {count :-1}},
  {$limit :5},
  {$project : {
    _id :0, artist_name:"$_id",count:1
  }}
])


{
  count: 2,
  artist_name: 'Amanda Henry'
}
{
  count: 1,
  artist_name: 'Ronald Hernandez'
}
{
  count: 1,
  artist_name: 'David Mann'
}
{
  count: 1,
  artist_name: 'Douglas Dean'
}
{
  count: 1,
  artist_name: 'Stephanie Patel'
}



// Count tracks on genre

db.tracks.aggregate([{
  $group : {
    _id : "$genre",
    count : {$sum : 1}
  }
}])


{
  _id: 'R&B',
  count: 7084
}
{
  _id: 'Folk',
  count: 7080
}
{
  _id: 'Classical',
  count: 7158
}
{
  _id: 'Pop',
  count: 7096
}
{
  _id: 'Rock',
  count: 7113
}
{
  _id: 'Indie',
  count: 7007
}
{
  _id: 'Country',
  count: 7030
}
{
  _id: 'Hip-Hop',
  count: 7160
}
{
  _id: 'EDM',
  count: 6894
}
{
  _id: 'Reggaeton',
  count: 7001
}
{
  _id: 'Metal',
  count: 7200
}
{
  _id: 'Jazz',
  count: 7177
}


// Number of songs released in each year
db.tracks.aggregate([{
  $group  : {
    _id : "$release_year",
    count : {$sum :1}
  }
}])

{
  _id: 2025,
  count: 7712
}
{
  _id: 2020,
  count: 7800
}
{
  _id: 2024,
  count: 7698
}
{
  _id: 2023,
  count: 7801
}
{
  _id: 2016,
  count: 7656
}
{
  _id: 2021,
  count: 7468
}
{
  _id: 2015,
  count: 7940
}
{
  _id: 2019,
  count: 7676
}
{
  _id: 2018,
  count: 7840
}

{
  _id: 2017,
  count: 7676
}
{
  _id: 2022,
  count: 7733
}

// Average popularity by year
db.tracks.aggregate([
  {
    $group : {_id:"$release_year",
             avgPopularity : {$avg : "$popularity"}}
  },
  {$sort :{_id:1} }
])

{
  _id: 2015,
  avgPopularity: 48.23450881612091
}
{
  _id: 2016,
  avgPopularity: 47.98497910135841
}
{
  _id: 2017,
  avgPopularity: 47.99635226680563
}

{
  _id: 2018,
  avgPopularity: 48.07831632653061
}
{
  _id: 2019,
  avgPopularity: 47.944762897342365
}
{
  _id: 2020,
  avgPopularity: 48.22205128205128
}
{
  _id: 2021,
  avgPopularity: 48.4481788966256
}
{
  _id: 2022,
  avgPopularity: 48.14224751066856
}
{
  _id: 2023,
  avgPopularity: 48.28765542879118
}
{
  _id: 2024,
  avgPopularity: 48.23538581449727
}
{
  _id: 2025,
  avgPopularity: 48.22069502074689
}

// Top 10 most popular songs
db.tracks.find({},{_id:0, track_name:1}).sort({popularity:-1}).limit(10)

{
  track_name: 'Summer such PM'
}
{
  track_name: 'Space'
}
{
  track_name: 'Although him'
}
{
  track_name: 'Finally easy exist'
}
{
  track_name: 'Good anything manager think'
}
{
  track_name: 'Ground once design walk simply'
}

{
  track_name: 'Size writer'
}
{
  track_name: 'Outside former official'
}
{
  track_name: 'Of'
}
{
  track_name: 'Upon'
}

// Average danceability per genre
db.tracks.aggregate([
  { $group:{
  				_id : "$genre",
    		avgDance : {$avg :"$danceability"}
  }
  }
])
{
  _id: 'R&B',
  avgDance: 0.5202046866177301
}

{
  _id: 'Folk',
  avgDance: 0.5184336158192091
}
{
  _id: 'Classical',
  avgDance: 0.5195613299804415
}
{
  _id: 'Pop',
  avgDance: 0.5192615558060879
}
{
  _id: 'Rock',
  avgDance: 0.525636159145227
}
{
  _id: 'Indie',
  avgDance: 0.5207035821321536
}
{
  _id: 'Hip-Hop',
  avgDance: 0.5205600558659218
}
{
  _id: 'EDM',
  avgDance: 0.5204931824775167
}
{
  _id: 'Reggaeton',
  avgDance: 0.5222082559634338
}
{
  _id: 'Metal',
  avgDance: 0.5169763888888889
}
{
  _id: 'Jazz',
  avgDance: 0.5191012958060471
}

db.tracks.aggregate(
  {$group : {
    _id : 0,
    maxLoud : {$max : "$loudness"},
    minLoud : {$min : "$loudness"}
  }
  })

{
  _id: 0,
  maxLoud: -1,
  minLoud: -55
}

// Top 5 loudest track name
db.tracks.find({loudness:-1}, {_id:0, track_name:1}).limit(10)

{
  track_name: 'Strong bag war',
  loudness: -1
}
{
  track_name: 'Possible bring dark staff',
  loudness: -1
}{
  track_name: 'Customer',
  loudness: -1
}
{
  track_name: 'Others window happen',
  loudness: -1
}

// Average duration per year
db.tracks.aggregate([
  {
    $group : {
      _id :"$release_year",
      avgDuration : {$avg : "$duration_minutes"}
    }
  }
])

{
  _id: 2025,
  avgDuration: 4.242608921161826
}
{
  _id: 2020,
  avgDuration: 4.284871794871795
}
{
  _id: 2024,
  avgDuration: 4.230449467394128
}
{
  _id: 2023,
  avgDuration: 4.267657992565056
}

{
  _id: 2016,
  avgDuration: 4.273119122257054
}
{
  _id: 2021,
  avgDuration: 4.289234065345474
}
{
  _id: 2015,
  avgDuration: 4.263853904282116
}
{
  _id: 2018,
  avgDuration: 4.303061224489796
}

{
  _id: 2019,
  avgDuration: 4.265502866076082
}
{
  _id: 2017,
  avgDuration: 4.302110474205315
}
{
  _id: 2022,
  avgDuration: 4.266520108625372
}


// Explicit vs Non-explicit count
db.tracks.aggregate([
  { $group: { _id: "$explicit", count: { $sum: 1 } } }
])

{
  _id: 0,
  count: 67887
}

{
  _id: 1,
  count: 17113
}


// Top 10 artists by song count
db.tracks.aggregate([
  {
    $group : {_id:"$artist_name", 
             total :{$sum:1}}
  },
  {$sort : {total :-1}},
  {$limit : 10}
])

{
  _id: 'Michael Smith',
  total: 44
}

{
  _id: 'Michael Johnson',
  total: 42
}
{
  _id: 'David Smith',
  total: 33
}

{
  _id: 'Christopher Johnson',
  total: 28
}
{
  _id: 'David Johnson',
  total: 27
}
{
  _id: 'Christopher Smith',
  total: 27
}
{
  _id: 'Michael Brown',
  total: 26
}
{
  _id: 'James Smith',
  total: 25
}

{
  _id: 'Michael Miller',
  total: 24
}

{
  _id: 'Jessica Smith',
  total: 24
}

// Top 5 average energy per artists
db.tracks.aggregate([
  {
    $group: {
      _id: "$artist_name",
      avgEnergy: { $avg: "$energy" }
    }
  },
  { $sort: { avgEnergy: -1 } },
  {
    $project: {
      _id: 0,
      artist_name: "$_id",
      avgEnergy: 1
    }
  }
])
{
  avgEnergy: 0.99,
  artist_name: 'Michael Hardin'
}
{
  avgEnergy: 0.99,
  artist_name: 'Jennifer Lowe'
}
{
  avgEnergy: 0.99,
  artist_name: 'Rose Gardner'
}
{
  avgEnergy: 0.99,
  artist_name: 'Justin Perry'
}
{
  avgEnergy: 0.99,
  artist_name: 'Laura Ramos'
}




// Most common musical key
db.tracks.aggregate([{
  $group : {_id : "$key",
  					count : {$sum :1} }},
                     {$sort : {count:-1}}
])
{
  _id: 2,
  count: 7200
}

{
  _id: 2,
  count: 7200
}
{
  _id: 9,
  count: 7159
}
{
  _id: 8,
  count: 7126
}
{
  _id: 11,
  count: 7097
}
{
  _id: 4,
  count: 7078
}
{
  _id: 6,
  count: 7060
}{
  _id: 1,
  count: 7055
}
{
  _id: 7,
  count: 7036
}
{
  _id: 5,
  count: 7024
}
{
  _id: 0,
  count: 6995
}
{
  _id: 3,
  count: 6978
}


//Correlation preparation
db.tracks.countDocuments({
  energy : {$gt : 0.75},
  popularity  : {$gt :80}
})
629


// Genre popularity ranking
db.tracks.aggregate([
  {$group : {
    _id : "$genre",
    avgPop : {$avg : "$popularity"}
  }
  },
  {$sort : {avgPop : -1}}
])
{
  _id: 'Pop',
  avgPop: 48.36710822998872
}
{
  _id: 'R&B',
  avgPop: 48.36434217955957
}
{
  _id: 'Classical',
  avgPop: 48.36420787929589
}
{
  _id: 'Hip-Hop',
  avgPop: 48.35740223463687
}
{
  _id: 'EDM',
  avgPop: 48.20496083550914
}
{
  _id: 'Metal',
  avgPop: 48.19361111111111
}
{
  _id: 'Country',
  avgPop: 48.170839260312945
}
{
  _id: 'Indie',
  avgPop: 48.12416155273298
}
{
  _id: 'Folk',
  avgPop: 48.10310734463277
}
{
  _id: 'Rock',
  avgPop: 47.96850836496556
}
{
  _id: 'Reggaeton',
  avgPop: 47.881445507784605
}
{
  _id: 'Jazz',
  avgPop: 47.852305977427896
}



// top 5 Songs per album
db.tracks.aggregate([{
  $group : {
    _id : "$album_name",
    count : {$sum : 1}
  }},
  {
    $sort: {count :-1}
  }
])
{
  _id: 'Theory',
  count: 64
}
{
  _id: 'Visit',
  count: 64
}
{
  _id: 'Drop',
  count: 61
}
{
  _id: 'Movie',
  count: 59
}
{
  _id: 'Simply',
  count: 59
}


// Popularity distribution by country
db.tracks.aggregate([
  {
    $group : {
      _id : "$country",
      avgPop : {$avg : "$popularity"},
      totalTracks : {$sum : 1}
    }
  },
  {$sort : {avgPop : -1}}
])

{
  _id: 'United Kingdom',
  avgPop: 48.41440056751005,
  totalTracks: 8458
}
{
  _id: 'Japan',
  avgPop: 48.350617571661616,
  totalTracks: 8582
}
{
  _id: 'France',
  avgPop: 48.33298282509639,
  totalTracks: 8559
}{
  _id: 'Brazil',
  avgPop: 48.31354534746761,
  totalTracks: 8490
}{
  _id: 'Germany',
  avgPop: 48.074494211203366,
  totalTracks: 8551
}{
  _id: 'United States',
  avgPop: 48.062814070351756,
  totalTracks: 8358
}{
  _id: 'Canada',
  avgPop: 48.060092807424596,
  totalTracks: 8620
}{
  _id: 'Australia',
  avgPop: 48.05216874628639,
  totalTracks: 8415
}{
  _id: 'India',
  avgPop: 48.008343956426,
  totalTracks: 8629
}{
  _id: 'Mexico',
  avgPop: 47.955504917246344,
  totalTracks: 8338
}



// Label wise popularity
db.tracks.aggregate([
  {
    $group : {
      _id : "$label",
      avgPop : {$avg : "$popularity"},
      totalTrack : {$sum :1}
    }
  },
  {$sort : {avgPop : -1}}
])

{
  _id: 'Sony Music',
  avgPop: 48.32555733232998,
  totalTrack: 10631
}
{
  _id: 'EMI',
  avgPop: 48.30404766408171,
  totalTrack: 10574
}
{
  _id: 'Independent',
  avgPop: 48.26107550849819,
  totalTrack: 10767
}
{
  _id: 'XL Recordings',
  avgPop: 48.20950687751474,
  totalTrack: 10687
}
{
  _id: 'Universal Music',
  avgPop: 48.201713469776294,
  totalTrack: 10505
}
{
  _id: 'Columbia',
  avgPop: 48.092984097287186,
  totalTrack: 10690
}
{
  _id: 'Island Records',
  avgPop: 48.00313479623824,
  totalTrack: 10527
}
{
  _id: 'Warner Music',
  avgPop: 47.903380732649026,
  totalTrack: 10619
}


// top 10 artist productivity per label
db.tracks.aggregate([
  {
    $group : {
      _id : {label : "$label", artist : "$artist_name"},
      trackCount : {$sum : 1}
    }
  },
  {$sort : {trackCount:-1}}
])

{
  _id: {
    label: 'Columbia',
    artist: 'Michael Smith'
  },
  trackCount: 11
}
{
  _id: {
    label: 'Island Records',
    artist: 'Christopher Johnson'
  },
  trackCount: 8
}
{
  _id: {
    label: 'Sony Music',
    artist: 'Michael Johnson'
  },
  trackCount: 8
}
{
  _id: {
    label: 'Sony Music',
    artist: 'David Davis'
  },
  trackCount: 8
}
{
  _id: {
    label: 'Warner Music',
    artist: 'Robert Johnson'
  },
  trackCount: 8
}
{
  _id: {
    label: 'Universal Music',
    artist: 'Michael Johnson'
  },
  trackCount: 8
}{
  _id: {
    label: 'Universal Music',
    artist: 'Mark Smith'
  },
  trackCount: 7
}{
  _id: {
    label: 'XL Recordings',
    artist: 'Jessica Smith'
  },
  trackCount: 7
}{
  _id: {
    label: 'EMI',
    artist: 'Christopher Johnson'
  },
  trackCount: 7
}{
  _id: {
    label: 'Island Records',
    artist: 'Michael Johnson'
  },
  trackCount: 7
}

// Top-Streaming Track per Label
db.tracks.aggregate([
  { $sort: { stream_count: -1 } },
  {
    $group: {
      _id: "$label",
      topTrack: { $first: "$track_name" },
      artist: { $first: "$artist_name" },
      maxStreams: { $first: "$stream_count" }
    }
  },
  { $sort: { maxStreams: -1 } }
])

{
  _id: 'Independent',
  topTrack: 'Quickly thousand reduce light',
  artist: 'Tiffany Morris',
  maxStreams: 20000000
}
{
  _id: 'Warner Music',
  topTrack: 'Which identify feel',
  artist: 'Ryan King',
  maxStreams: 20000000
}
{
  _id: 'XL Recordings',
  topTrack: 'Leave outside',
  artist: 'Kelsey Nguyen',
  maxStreams: 20000000
}
{
  _id: 'Universal Music',
  topTrack: 'School form',
  artist: 'Robert Carter',
  maxStreams: 20000000
}{
  _id: 'Sony Music',
  topTrack: 'Woman treat',
  artist: 'Stanley Baldwin',
  maxStreams: 20000000
}
{
  _id: 'EMI',
  topTrack: 'Recognize fly',
  artist: 'Allison Hale',
  maxStreams: 20000000
}{
  _id: 'Island Records',
  topTrack: 'Serious listen',
  artist: 'Tracy Fields',
  maxStreams: 20000000
}{
  _id: 'Columbia',
  topTrack: 'Role shake yeah body',
  artist: 'Joshua Stone',
  maxStreams: 20000000
}