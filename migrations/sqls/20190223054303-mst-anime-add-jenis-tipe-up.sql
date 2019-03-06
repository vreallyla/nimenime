/* add column */
ALTER TABLE mst_animes
ADD COLUMN `tipe` enum('Anime','Live Action') AFTER `tgl_terbit`,
ADD COLUMN `jenis` enum('Series','Movie') AFTER `tipe`;
